import {Link} from 'react-router-dom';
import './index.css';


const LoginPage = () => {
    return (
        <div className='login-page-background'>
            <div className='login-page'>
                <img src="/F&V.png" alt="logo" className="navbar-logo" />
                <div className='login-page-content'>
                    <Link to="/SignUp"><button className="sign-button" >Sign Up</button></Link>
                    <Link to="/SignIn"><button className="sign-button">Sign In</button></Link>
                </div>
            </div>
        </div>
    ) 
}

export default LoginPage;