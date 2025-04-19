import { Component } from 'react';
import Cookies from 'js-cookie'; 
import AppContext from '../../context';
import './index.css';

class SignInPage extends Component {
  state = { email: '', password: '', error: '' ,/*logged: false*/};

  emailInput = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordInput = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { email, password, error,/*logged*/ } = this.state;

    return (
      <AppContext.Consumer>
        {value => {
          const {IsLoggedIn,setIsLoggedIn} = value
          
          this.onSubmitForm = async (event) => {
            event.preventDefault();
            const { email, password } = this.state;
            const userDetails = { email, password };
        
            const url = 'http://localhost:5000/api/login';
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userDetails),
            };
        
            const response = await fetch(url, options);
            const data = await response.json();
        
            if (response.ok) {
              console.log(data.message);
              this.submitedSuccessful(data.token);
            } else {
              this.setState({ error: data.message || 'Login failed' });
            }
          }
          this.submitedSuccessful = (jwtToken) => {
            setIsLoggedIn();
            Cookies.set('jwt_token', jwtToken, { expires: 100 })
            const { navigate } = this.props
            this.setState({ logged: true })
            navigate('/')
          }
          console.log(IsLoggedIn)

          return (
            <div className="signin-page">
              <form className="signin-form" onSubmit={this.onSubmitForm}>
                <h1 className="signin-title">F&V</h1>
      
                <div className="signin-input-group">
                  <label htmlFor="email" className="signin-label">EMAIL</label>
                  <input
                    value={email}
                    onChange={this.emailInput}
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="signin-input"
                  />
                </div>
      
                <div className="signin-input-group">
                  <label htmlFor="password" className="signin-label">PASSWORD</label>
                  <input
                    value={password}
                    onChange={this.passwordInput}
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="signin-input"
                  />
                </div>
      
                {error && <p className="signin-error">{error}</p>}
      
                <button type="submit" className="signin-button">Sign In</button>
              </form>
            </div>
          );
        }}
      </AppContext.Consumer>
    )
  }
}

export default SignInPage;
