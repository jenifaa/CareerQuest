import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const newUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser, updatedData)
  }

  // const updateUserProfile = async (name, photoURL) => {
   
  //   if (auth.currentUser) {
  //     try {
  //       await updateProfile(auth.currentUser, {
  //         displayName: name,
  //         photoURL: photoURL,
  //       });
  //       setUser({ ...auth.currentUser, displayName: name, photoURL: photoURL });
  //       return Promise.resolve("Profile updated successfully");
  //     } catch (error) {
  //       return Promise.reject(error.message);
  //     }
  //   } else {
  //     return Promise.reject("No user logged in");
  //   }
  // };




  // const updateUserProfile = (name, photoURL) => {
  //   const auth = getAuth();
  //   if (auth.currentUser) {
  //     return updateProfile(auth.currentUser, {
  //       displayName: name,
  //       photoURL: photoURL,
  //     })
  //       .then(() => {
  //         setUser({ ...auth.currentUser, displayName: name, photoURL: photoURL });
  //       })
  //       .catch((error) => {
  //         return Promise.reject(error.message);
  //       });
  //   } else {
  //     return Promise.reject("No user logged in");
  //   }
  // };
  
  

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  console.log(user);
  const authInfo = {
    user,
    setUser,
    newUser,
    logOut,
    userLogin,
    loading,
    setLoading,
    updateUserProfile,
    signInWithGoogle,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
