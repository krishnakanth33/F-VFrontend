import {Link} from 'react-router-dom';
import { Component } from 'react';
import AppContext from '../../context';
import './index.css';

class Navbar extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {value => {
                    const {IsLoggedIn} = value
                    console.log(IsLoggedIn)
                    return (
                        <div>
                            <nav className="navbar">
                                <Link to="/" className="navbar-link">
                                    <img src="/F&V.png" alt="logo" className="navbar-logo" />
                                </Link>
                                {IsLoggedIn? (<div>
                                    <Link to="/Profile"><button className="navbar-button">Profile</button></Link>
                                </div>):(<div>
                                    <Link to="/SignUp"><button className="navbar-button" >Sign Up</button></Link>
                                    <Link to="/SignIn"><button className="navbar-button">Sign In</button></Link>
                                </div>)}
                            </nav>
                        </div>
                    )
                    
                }}
            </AppContext.Consumer>
        )
    }
}

export default Navbar;