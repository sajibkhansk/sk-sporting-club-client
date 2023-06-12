import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import Instructor from "../pages/Instructor/Instructor";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Error from "../Error/Error";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import Feedback from "../pages/Dashboard/FeedBack/Feedback";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      },
      {
        path: '/classes',
        element:<Classes></Classes>
      },
      {
        path: '/instructor',
        element:<Instructor></Instructor>
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'myselectedclass',
        element:<MySelectedClass></MySelectedClass>
      },
      {
        path:'allusers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'addclass',
        element:<AddClass></AddClass>
      },
      {
        path:'insturctorclass',
        element:<InstructorClass></InstructorClass>
      },
      {
        path:'manageclass',
        element:<ManageClass></ManageClass>
      },
      {
        path:'Feedback',
        element:<Feedback></Feedback>
      }
    ]
  }
]);