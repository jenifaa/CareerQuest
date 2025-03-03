import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase.init";
import { Helmet } from "react-helmet";

const Login = () => {
  const { userLogin, setUser ,signInWithGoogle ,setLoading} = useContext(AuthContext);
  
  const [success, setSuccess] = useState(false);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
       
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
 
  const [error, setError] = useState({});
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
 
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
        setError({ login: err.code }); 
        toast.error("Invalid email or password"); 
        
       
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
      toast.info('please check your email')
    })
   }
  }
  return (
    <div>
     
      <Helmet>
            <title>CareerQuest | Login</title>
        </Helmet>
      
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
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered "
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-12 top-[250px] md:top-[252px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
              </button>
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
              <img src={'./google.png'} alt="" className="w-8 mr-3" />
              <p>Sign In with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
