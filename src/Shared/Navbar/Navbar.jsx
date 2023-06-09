
import { Link } from 'react-router-dom';
const ourNavOption = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Instructor</Link></li>
    <li><Link to="/order/salad">Classes</Link></li>
    <li><Link to="/secret">Dashboard</Link></li>
</>
const NavBar = () => {
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {ourNavOption}
                        </ul>
                    </div>
                    <div className="w-10 rounded-full">
                        <Link to="/home">
                            <img src="https://i.ibb.co/fXLYjZ9/icon.jpg" />
                        </Link>
                    </div>
                    <Link to="/home" className="btn btn-ghost normal-case text-xl">SK Sporting Club</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {ourNavOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;