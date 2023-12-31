import React from 'react';
import { FaHome, FaUser, FaTasks, FaPlus, FaBook, FaBookOpen, FaUserGraduate} from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
  //TODO: Load data from server based on admin
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log(isInstructor);

  
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <h1 className='text-primary font-bold text-5xl mb-1'>Welcome to Dashboard </h1>
    <div className="divider"></div>
    <Outlet></Outlet>
    
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
     
    {
        isAdmin && <>
        <li>
        <h1 className='text-2xl text-red-500'><FaUser></FaUser> Admin DashBoard</h1>
      </li>
      <div className="divider"></div>
      <li><NavLink to='/dashboard/manageclass'><FaTasks></FaTasks> Manage Class </NavLink></li>
      <li><NavLink to='/dashboard/allusers'><FaUser></FaUser> Manage User</NavLink></li>
        </>
      }
    {
        isInstructor && <>
        <li>
        <h1 className='text-2xl text-red-500'><FaUser></FaUser> Instructor DashBoard</h1>
      </li>
      <div className="divider"></div>
      <li><NavLink to='/dashboard/addclass'><FaPlus></FaPlus>Add a Class</NavLink></li>
      <li><NavLink to='/dashboard/insturctorclass'><FaBook></FaBook>MyClass</NavLink></li>
        </>
      }
      
      {!isInstructor && !isAdmin &&
      <>
      <li>
      <h1 className='text-3xl text-red-500'><FaUser></FaUser> User DashBoard</h1>
    </li>
    <div className="divider"></div>
    <li><NavLink to='/dashboard/myselectedclass'><FaBookOpen></FaBookOpen> My Selected Classes</NavLink></li>
    <li><NavLink to='/dashboard/payment'><FaUserGraduate></FaUserGraduate> My Enrolled Classes</NavLink></li>
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
