import React from 'react';
import { FaHome, FaUser} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li>
        <h1 className='text-3xl text-red-500'><FaUser></FaUser> User DashBoard</h1>
      </li>
      <div className="divider"></div>
      <li><Link>My Selected Classes</Link></li>
      <li><Link>My Enrolled Classes</Link></li>
      <div className="divider">OR</div>
      <li><Link to='/'><FaHome></FaHome>Back to Home</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
