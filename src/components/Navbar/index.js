import {Link , Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Navbar = () =>  {
    const logoutBtn = () => {
        Cookies.remove('jwt_token')
        Navigate('/login')
    }

    return (
        <div>
            <nav className="navbar">
                <Link to="/home" className="navbar-link">
                    <img src="/F&V.png" alt="logo" className="navbar-logo" />
                </Link>
                <div>
                    <button className='logout-button' onClick={logoutBtn()}>Logout</button>
                </div>
            </nav>
        </div>
    )   
}

export default Navbar;