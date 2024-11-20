import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/Main/MainLayOut";
import Home from "./Components/Pages/Home";
import Error from "./Components/Pages/Error";
import AuthProvider from "./Components/Pages/AuthProvider";
import Cards from "./Components/Pages/Cards";
import Card from "./Components/Pages/Card";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import AuthLayOut from "./Components/Main/AuthLayOut";


import All from "./Components/Pages/All";
import CardsDetails from "./Components/Pages/CardsDetails";
import PrivateRoutes from "./Components/Routes/PrivateRoutes";
import UpdateProfile from "./Components/Pages/UpdateProfile";
import Offer from "./Components/Pages/Offer";
import Dashboard from "./Components/Pages/Dashboard";
import AboutUs from "./Components/Pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "offer",
        element: <Offer></Offer>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>
      }
    ],
  },
  {
    path: "/card/:id",
    element: <PrivateRoutes><CardsDetails></CardsDetails></PrivateRoutes>,
    loader: () => fetch('/allData.json')
   
  },
  {
    path: "cards",
    element: <PrivateRoutes><All></All></PrivateRoutes>,
    // element: <All></All>,
    loader: () => fetch('allData.json'),
  },
  // {
  //   path: "auth",
  //   element: <AuthLayOut></AuthLayOut>,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login></Login>,
  //     },
  //     {
  //       path: "register",
  //       element: <Register></Register>,
  //     },
  //   ],
  // },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'update',
    element: <UpdateProfile></UpdateProfile>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
