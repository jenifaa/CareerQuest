import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import { useState } from "react";
const MainLayOut = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
       <ToastContainer 
        position="top-center" 
        autoClose={3000}     
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" 
      />
      <header>
        <Header></Header>
        <Navbar></Navbar>
      </header>
      <main><Outlet></Outlet></main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
