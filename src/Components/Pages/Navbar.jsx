import { useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase.init";
import Loading from "./Loading";
import career from '../../assets/careerQuest.jpg'

const Navbar = () => {
  const { user, logOut, updateUserProfile, setUser, loading } =
    useContext(AuthContext);
  // const [loading, setLoading] = useState(true)

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const links = (
    <div className="bg-slate-700 text-white md:px-8 md:py-4 md:rounded-full">
      <NavLink className="mr-4 font-bold" to="/">
        Home
      </NavLink>
      <NavLink className="mr-4 font-bold" to="/about">
        About us
      </NavLink>
      <NavLink className="mr-4 font-bold" to="/dashboard">
        DashBoard
      </NavLink>
      <NavLink className="mr-4 font-bold" to="/blog">
        Our Blog
      </NavLink>
      {user && user?.email ? (
        <>
          <NavLink className=" font-bold" to="/offer">
            Offers
          </NavLink>
        </>
      ) : (
        ""
      )}
    </div>
  );

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="navbar bg-base-100 md:w-11/12 mx-auto pt-3 rounded-xl font2 md:py-5 md:px-3 mb-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-48 bg-slate-700 text-white rounded-lg shadow-lg"
          >
            {links}
          </ul>
        </div>
        <Link
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          to="/"
         
        >
          <img className="w-36" src={career} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal border-2 rounded-full px-2 py-2">
          {links}
        </ul>
      </div>

      {location.pathname === "/cards" && (
        <div className="form-control hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-auto"
          />
        </div>
      )}

      <div
        className="navbar-end flex items-center gap-3"
        // data-aos="fade-left"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
      >
        {user && user?.photoURL ? (
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-full  md:flex"
            src={user?.photoURL}
            title={user?.displayName || "User"}
            alt="User Profile"
          />
        ) : (
          <CgProfile className="text-4xl md:text-5xl" />
        )}

        {user && user?.email ? (
          <div className="flex md:flex items-center  md:gap-3 sm:gap-2 flex-col sm:flex-row">
            <button
              onClick={logOut}
              className="px-4 py-2 bg-slate-700 text-white font-bold text-sm md:text-base"
            >
              LogOut
            </button>
            <Link
              to="/update"
              className="px-4 py-2 bg-slate-700 text-white font-bold text-sm md:text-base"
            >
              User
            </Link>
          </div>
        ) : (
          <div className="flex md:flex items-center  md:gap-3 sm:gap-2 flex-col sm:flex-row">
            <Link
              className="px-4 py-2 bg-slate-700 text-white font-bold text-sm md:text-base"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="px-4 py-2 bg-slate-700 text-white font-bold text-sm md:text-base"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
