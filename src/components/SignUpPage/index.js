// SignUpPage.jsx
import { Component } from 'react'
import Cookies from 'js-cookie'; 
import AppContext from '../../context';
import './index.css'

class SignUpPage extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    error: '',
  }

  emailInput = (event) => this.setState({ email: event.target.value })
  usernameInput = (event) => this.setState({ username: event.target.value })
  passwordInput = (event) => this.setState({ password: event.target.value })
  confirmPasswordInput = (event) => this.setState({ confirmPassword: event.target.value })

  render() {
    const { email, username, password, confirmPassword, error } = this.state
    return (
      <AppContext.Consumer>
        {value => { 
          const { setIsLoggedIn} = value

          this.onSubmitForm = async (event) => {
            event.preventDefault()
            const { email, username, password, confirmPassword } = this.state
        
            if (password !== confirmPassword) {
              this.setState({ error: 'Passwords do not match' })
              return
            }
        
            const userDetails = { email, username, password }
            const url = 'http://localhost:5000/api/signup' // Your actual backend API
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userDetails),
            }
        
            try {
              const response = await fetch(url, options)
              const data = await response.json()
              if (response.ok) {
                console.log('User signed up successfully')
                this.submitedSuccessful(data.token)
              } else {
                this.setState({ error: data.message || 'Error signing up user' })
              }
            } catch (error) {
              console.error('Signup error:', error)
              this.setState({ error: 'Something went wrong. Try again later.' })
            }
          }

          this.submitedSuccessful = (jwtToken) => {
            setIsLoggedIn();
            Cookies.set('jwt_token', jwtToken, { expires: 100 })
            const { navigate } = this.props
            this.setState({ logged: true })
            navigate('/')
          }

          return (
            <div className="signup-page">
              <form className="signup-form" onSubmit={this.onSubmitForm}>
                <h1 className="signup-title">F&V</h1>
      
                <div className="signup-input-group">
                  <label htmlFor="email" className="signup-label">EMAIL</label>
                  <input value={email} onChange={this.emailInput} type="email" id="email" required className="signup-input" />
                </div>
      
                <div className="signup-input-group">
                  <label htmlFor="username" className="signup-label">USERNAME</label>
                  <input value={username} onChange={this.usernameInput} type="text" id="username" required className="signup-input" />
                </div>
      
                <div className="signup-input-group">
                  <label htmlFor="password" className="signup-label">PASSWORD</label>
                  <input value={password} onChange={this.passwordInput} type="password" id="password" required className="signup-input" />
                </div>
      
                <div className="signup-input-group">
                  <label htmlFor="confirm-password" className="signup-label">CONFIRM PASSWORD</label>
                  <input value={confirmPassword} onChange={this.confirmPasswordInput} type="password" id="confirm-password" required className="signup-input" />
                </div>
      
                {error && <p className="error-text">{error}</p>}
      
                <button type="submit" className="signup-button">Sign Up</button>
              </form>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default SignUpPage
