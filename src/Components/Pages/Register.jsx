import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useState } from "react";
import icon from "../../assets/google.png";
import Navbar from "./Navbar";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { newUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    console.log(email, password, name, photo);
    setError("");
    setSuccess(false);
    if (password.length < 6) {
      setError("Password Should be At-least 6 character long");
      return;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        <>Password should contains : <br /> (1) At-least one uppercase,<br /> (2) one lowercase,<br /> (3) one number and <br /> (4 )one special character,</>
        // toast.error("Invalid Information")
        
      );

      return;
    }

    newUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        
        setSuccess(true);
        updateUserProfile({ displayName: name, photoURL: photo })
         
        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log("Error", err.message);

        setSuccess(false);
      });
  };
  return (
    <div className="bg-base-200">
      <Navbar></Navbar>
      <div className="hero  min-h-screen">
        <div className="card bg-base-100 lg:w-5/12 mx-auto">
          <h2 className="text-3xl font-bold my-5 pl-8">Register</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Your Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
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
                className="absolute right-5 top-[52px]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#E6533C] text-base-200">
                Register
              </button>
            </div>
            <p>
              Already have an account? please <Link to="/login">Login</Link>
            </p>
          </form>
          {error && <p className="text-red-600 px-4 pb-4">{error}</p>}
          {success && <p className="text-green-600">SignUp is Successful</p>}
          <div className="mb-2 ml-5  rounded-full lg:w-[38%] w-full">
            <button
              onClick={handleGoogleSignIn}
              className=" font-semibold flex justify-around items-center border-2 p-3 rounded-full "
            >
              <img src={icon} alt="" className="w-8 mr-3" />
              <p>Sign Up with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
