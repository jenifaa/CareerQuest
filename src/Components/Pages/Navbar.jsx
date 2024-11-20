import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const Navbar = () => {
  const { user, logOut, updateUserProfile } = useContext(AuthContext);
  // updateUserProfile()
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();
  const links = (
    <>
      <NavLink className="mr-4" to="/">
        Home
      </NavLink>
      <NavLink className="mr-4" to="/register">
        Register
      </NavLink>
      <NavLink className="mr-4" to="/about">
        About us
      </NavLink>
      <NavLink className="mr-6" to="">
        secret
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto font2 py-5 mb-10">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          data-aos="fade-right" // Add AOS animation type
          data-aos-duration="1000" // Set animation duration (1s)
          data-aos-easing="ease-in-out"
          to="/"
          className="text-3xl  font-bold font"
        >
          <span className="text-[#E6533C] font-bold ">G</span>oalPath
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {location.pathname === "/cards" ? (
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            //   value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}

            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      ) : (
        ""
      )}

      <div
        className="navbar-end"
        data-aos="fade-left" // Add AOS animation type
        data-aos-duration="1000" // Set animation duration (1s)
        data-aos-easing="ease-in-out"
      >
        {user && user?.photoURL ? (
          <div>
            <img
              className="w-12 h-12 rounded-full mr-3 "
              src={user?.photoURL}
              title={user?.displayName || "User"}
              alt=""
            />
          </div>
        ) : (
          <CgProfile className="text-5xl mr-3" />
        )}

        {user && user?.email ? (
          <div className=" lg:flex ml-3 items-center gap-3">
            <button
              onClick={logOut}
              className="px-4 py-2 bg-[#E6533C] text-white font-bold "
            >
              LogOut
            </button>
            <Link
              to="/update"
              className="px-4 py-2 bg-[#E6533C] text-white font-bold "
            >
              Update
            </Link>
          </div>
        ) : (
          <>
            <Link
              className="px-4 py-2 bg-[#E6533C] text-white font-bold  mr-3"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="px-4 py-2 bg-[#E6533C] text-white font-bold"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
