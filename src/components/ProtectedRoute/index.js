import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css'; 

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const jwt = Cookies.get('jwt_token');
    setToken(jwt);
  }, []);

  if (token === null) return null; // or a loader

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="protected-route-container">
      <Navbar />
      <div className="protected-route-content">
        <Sidebar />
        <div className="protected-route-children">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedRoute;