import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createAccount = () => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err.message));
  };

  const signInUser = (email, password) => {
    setLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err.message));
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user er obostha", currentUser);
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signInUser,
    createAccount,
    logOut,
    googleLogin,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
