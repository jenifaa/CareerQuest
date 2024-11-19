import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success('Login Successfully!!!')
      })
      .catch((error) => {
        toast.error('Invalid email or Password')
        // console.log("Error", error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
       
        <div className="card bg-base-100 w-5/12 mx-auto">
        <h2 className="text-3xl font-bold my-5 text-center">
          Login to your Account
        </h2>
          <form onSubmit={handleSubmit} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#E6533C] text-base-200">Login</button>
            </div>
            <p>
              New to this website? please <Link to="/login">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
