// src/components/Layout/index.js
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import { Outlet } from 'react-router-dom';

import './index.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="app-layout">
        <SideBar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
