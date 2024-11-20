import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const {updateUserProfile} = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handlePage = () =>{
    // navigate('/');
  }
    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        
        const photo = e.target.photo.value;
        updateUserProfile({displayName: name, photoURL: photo})
        .then((result) =>{
           console.log(result.user);
        })
        .catch((error) => {
          setMessage(`Error: ${error.message}`);
        });
    
        console.log( name, photo);
    }
  return (
    <div>
        <Navbar></Navbar>
      <div className="hero  min-h-screen bg-base-200">
        <div className="card bg-base-100 lg:w-5/12 mx-auto">
          <h2 className="text-3xl font-bold my-5 pl-8">Update Your Profile</h2>
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
           
           
           <button onClick={handlePage} className="bg-slate-800 px-4 py-3 text-white font-semibold rounded-lg my-4">Update</button>
          </form>
          
          
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
