import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";

const MainLayOut = () => {
  return (
    <div>
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
