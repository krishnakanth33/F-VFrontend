import { Component } from 'react';
import Cookies from 'js-cookie';
import AppContext from '../../context';
import './index.css';

class SignInPage extends Component {
  state = { email: '', password: '', error: '' };

  emailInput = (event) => this.setState({ email: event.target.value });
  passwordInput = (event) => this.setState({ password: event.target.value });

  onSubmitForm = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      this.handleSuccess(data.token, data.user);
    } else {
      this.setState({ error: data.message || 'Login failed' });
    }
  };

  handleSuccess = (jwtToken, user) => {
    const { navigate } = this.props;
    Cookies.set('jwt_token', jwtToken, {
      expires: 100,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    this.context.setUserDetails(user);
    navigate('/');
  };

  render() {
    const { email, password, error } = this.state;

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
  }
}

SignInPage.contextType = AppContext;

export default SignInPage;
