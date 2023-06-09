import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    const isSignUp = location.pathname.includes('signup');
    return (
        <div>
            { isLogin || isSignUp || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isLogin || isSignUp ||<Footer></Footer>}
        </div>
    );
};

export default Main;