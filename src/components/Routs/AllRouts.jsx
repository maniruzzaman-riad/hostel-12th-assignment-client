import {
    createBrowserRouter,
  } from "react-router-dom";
import MainHome from "../Layout/MainHome";
import Home from "../Pages/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome></MainHome>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);