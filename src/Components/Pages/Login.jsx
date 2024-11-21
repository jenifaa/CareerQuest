import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import icon from "../../assets/google.png";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase.init";
import { Helmet } from "react-helmet";

const Login = () => {
  const { userLogin, setUser ,signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
       
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
 
  const [error, setError] = useState([]);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successfully!!!");
        navigate(location?.state ? location.state : "/");
        
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error("Invalid email or Password");
       
      });
  };
  const handleForgetPassword =() =>{
    
    const email = emailRef.current.value;
   if(!email){
    toast.error("please provide a valid email address");
   }
   else{
    sendPasswordResetEmail(auth, email)
    .then(() =>{
      toast.error('please check your email')
    })
   }
  }
  return (
    <div>
      <Helmet>
            <title>CareerQuest | Login</title>
        </Helmet>
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
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 lg:w-5/12 mx-auto">
          <h2 className="text-3xl font-bold my-5 text-center">
            Login to your Account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              ref={emailRef}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {error.login && <label className="label">{error.login}</label>}
              <label onClick={handleForgetPassword} className="label">
                <a href="https://mail.google.com/mail/u/0/#inbox" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#E6533C] text-base-200">Login</button>
            </div>
            <p>
              New to this website? please <Link to="/register">Register</Link>
            </p>
          </form>
          <div className="mb-2 ml-5  rounded-full lg:w-[38%] ">
            <button
              onClick={handleGoogleSignIn}
              className=" font-semibold flex justify-around items-center border-2 p-3 rounded-full "
            >
              <img src={icon} alt="" className="w-8 mr-3" />
              <p>Sign In with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
