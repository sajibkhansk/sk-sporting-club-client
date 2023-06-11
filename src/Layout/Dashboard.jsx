import React from 'react';
import { FaHome, FaUser} from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  //TODO: Load data from server based on admin
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  
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
      {
        isAdmin ? <>
        <li>
        <h1 className='text-2xl text-red-500'><FaUser></FaUser> Admin DashBoard</h1>
      </li>
      <div className="divider"></div>
      <li><NavLink to='/dashboard'>Manage Class</NavLink></li>
      <li><NavLink to='/dashboard/allusers'>Manage User</NavLink></li>
        </> : <>
        <li>
        <h1 className='text-3xl text-red-500'><FaUser></FaUser> User DashBoard</h1>
      </li>
      <div className="divider"></div>
      <li><NavLink to='/dashboard/myselectedclass'>My Selected Classes</NavLink></li>
      <li><NavLink to='/dashboard/myendrolledclass'>My Enrolled Classes</NavLink></li>
        </>
      }
      {/* Sidebar content here */}
      
      <div className="divider">OR</div>
      <li><NavLink to='/'><FaHome></FaHome>Back to Home</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
