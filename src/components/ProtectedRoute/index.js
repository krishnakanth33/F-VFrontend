import Cookie from 'js-cookie'
import { Navigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const ProtectedRoute = ({ children }) => {
    const token = Cookie.get('jwt_token')

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return(
        <div className="protected-route-container">
            <Navbar />
            <div className="protected-route-content">
                <Sidebar />
                <div className="protected-route-children">{children}</div>
            </div>
        </div>
    )
}

export default ProtectedRoute