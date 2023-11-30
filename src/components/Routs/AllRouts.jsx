import {
    createBrowserRouter,
  } from "react-router-dom";
import MainHome from "../Layout/MainHome";
import Home from "../Pages/Home/Home";
import Login from "../allInput/Login";
import Register from "../allInput/Register";
import Dashboard from "../Layout/dashboard/Dashboard";
import AdminProfile from "../Pages/DashboardPages/admin/AdminProfile";
import AddMeal from "../allInput/AddMeal";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome></MainHome>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'adminProfile',
          element:<AdminProfile></AdminProfile>
        },
        {
          path:'addMeal',
          element:<PrivateRoute><AddMeal></AddMeal></PrivateRoute>
        }
      ]
    }
  ]);