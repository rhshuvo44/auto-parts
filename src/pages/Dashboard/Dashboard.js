import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center mt-10">
          <h2 className="text-3xl text-purple-500">Welcome to your Dashboard</h2>
        <Outlet />
        
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
          <li>
            <Link to='/dashboard'>My Order</Link>
          </li>
          <li>
            <Link to='/dashboard/review'>Add Review</Link>
          </li>
          <li>
            <Link to='/dashboard/myProfile'>My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;