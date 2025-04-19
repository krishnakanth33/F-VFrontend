import {Link} from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import './index.css'

const SideBar = () => {
        return (
        <div className="sidebar-contianer">
            <div className="sidebar-header">
                
            </div>
            <div className="sidebar-links-card">
                <Link className='sidebar-link' to="/">
                    <MdHome className='sidebar-icon'/>Home
                </Link>
                <Link className='sidebar-link' to="/myorders">
                    <FaShoppingCart className='sidebar-icon'/>My orders
                </Link>
                <Link className='sidebar-link' to="/admin-dashboard">Admin Dashboard</Link>
            </div>
                    
        </div>
    );
}

export default SideBar;