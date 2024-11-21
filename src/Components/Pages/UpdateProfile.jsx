import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";

const UpdateProfile = () => {
  const { updateUserProfile, user } = useContext(AuthContext);
  
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const photo = e.target.photo.value;
    updateUserProfile({ displayName: name, photoURL: photo })
      .then((result) => {
        toast.success("Profile updated successfully!");
        
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
    navigate("/");
  };

  return (
    <div className="bg-base-200">
      <Navbar />
      {!user ? (
        <p className="text-center text-xl mt-4"></p>
      ) : (
        <div>
          <div className="w-5/12 mx-auto">
            <h2 className="text-3xl font-bold my-4">
              Name: {user.displayName}
            </h2>
            <p className="text-3xl font-semibold my-4 flex gap-8 items-center">
              Profile Picture:{" "}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={`${user.displayName}'s profile`}
                  className="w-32 h-32 rounded-xl"
                />
              ) : (
                <p>No Photo Available</p>
              )}
            </p>
            <p className="text-2xl font-semibold my-4">
              <span className="text-3xl font-bold">Email:</span> {user.email}
            </p>
          </div>

          <div className="hero min-h-screen">
            <div className="card bg-base-100 lg:w-5/12 mx-auto">
              <h2 className="text-3xl font-bold my-5 pl-8">
                Update Your Profile
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

                <button className="bg-slate-800 px-4 py-3 text-white font-semibold rounded-lg my-4">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
