import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const isInstructor = true;
    const location = useLocation();
    console.log("i am in admin route");
    if(loading || !isInstructor){
        return <progress className="progress w-56"></progress>
        
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;