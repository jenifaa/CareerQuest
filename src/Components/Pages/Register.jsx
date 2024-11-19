import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const Register = () => {
    const {newUser , setUser} = useContext(AuthContext)
    const handleSubmit = e =>{
        e.preventDefault();
        const name  = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        
        console.log(email, password, name, photo);

        newUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(error => {
            console.log("Error", error.message)
        })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        
        
          <div className="card bg-base-100 w-5/12 mx-auto">
          <h2 className="text-3xl font-bold my-5 pl-8">
          Register 
        </h2>
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
                <button className="btn bg-[#E6533C] text-base-200">Register</button>
              </div>
              <p>Already have an account? please <Link to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default Register;
