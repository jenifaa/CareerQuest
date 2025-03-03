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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogPage from "./Components/Pages/BlogPage";

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
        element: <Offer></Offer>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "blog",
        element: <BlogPage></BlogPage>,
      },
    ],
  },
  {
    path: "/card/:id",
    element: (
      <PrivateRoutes>
        <CardsDetails></CardsDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch("/allData.json"),
  },
  {
    path: "cards",
    element: (
      <PrivateRoutes>
        <All></All>
      </PrivateRoutes>
    ),

    loader: () => fetch("allData.json"),
  },

  {
    path: "login",
    element: <Login></Login>,
  },

  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "update",
    element: <UpdateProfile></UpdateProfile>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>


      
    </AuthProvider>
   
  </StrictMode>
);
