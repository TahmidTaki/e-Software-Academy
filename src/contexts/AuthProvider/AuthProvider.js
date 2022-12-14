import React from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  //register new user with email and password
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login existing user with email and password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github sign in
  const gitHubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //update user data
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Seting authentication state observer

  /*   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []); */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      /*  if (currentUser) {
        setUser(currentUser);
      } */
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    registerWithEmail,
    logIn,
    logOut,
    loading,
    setLoading,
    googleLogin,
    gitHubSignIn,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
