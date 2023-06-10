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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    element:<Dashboard></Dashboard>,
    children: [
      {
        path:'myselectedclass',
        element:<MySelectedClass></MySelectedClass>
      }
    ]
  }
]);