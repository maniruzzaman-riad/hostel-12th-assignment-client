import {
    createBrowserRouter,
  } from "react-router-dom";
import MainHome from "../Layout/MainHome";
import Home from "../Pages/Home/Home";
import Login from "../allInput/Login";

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
        }
      ]
    },
  ]);