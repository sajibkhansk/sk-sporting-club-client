import { FaShoppingBag} from 'react-icons/fa';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useCart from '../../hooks/useCart';



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    const ourNavOption = <>
        
  <li><Link to="/">Home</Link></li>
  <li><Link to="/instructor">Instructor</Link></li>
  <li><Link to="/classes">Classes</Link></li>
  { user && <li>
    <Link to='/dashboard'>
      <button className="btn btn-sm">
        <FaShoppingBag/>
        <div className="badge badge-secondary">+{cart.length || 0}</div>
      </button>
    </Link>
  </li>}

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {ourNavOption}
                        </ul>
                    </div>
                    <div className="w-10 rounded-full">
                        <Link to="/">
                            <img src="https://i.ibb.co/fXLYjZ9/icon.jpg" />
                        </Link>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">SK Sporting Club</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <div className='flex items-center'>
                    {ourNavOption}
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to="/login" className="btn">Login</Link> */}

                    {user ? <button onClick={handleLogOut} className='btn'>Logout</button> : <Link to="/login" className="btn">Login</Link>}

                </div>
                <div className="dropdown dropdown-end">
                    {user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>}

                </div>
            </div>
        </>
    );
};

export default NavBar;