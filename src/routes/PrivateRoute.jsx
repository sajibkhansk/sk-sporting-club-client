import { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="text-center"><span className="loading loading-spinner text-secondary loading-lg"></span></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;