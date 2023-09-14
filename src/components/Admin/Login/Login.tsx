import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DataBaseFeeder from "../dataBaseFeeder";
import DataBaseFeeder2 from "../dataBaseFeeder2";
//import firebase from "../../../pages/api/clientApp";
//import firebase from "firebase/compat/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";


const provider = new GoogleAuthProvider();
const auth = getAuth();

function Login() {
  const [user, loading, error] = useAuthState(auth);
  console.log("loading: ", loading, "|", "Current user:", user);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in here if needed.
      })
      .catch((error) => {
        // Handle sign-in error here.
        console.error("Sign-in error:", error);
      });
  };

  const handleSignOut = () => {
    
    signOut(auth)
      .then(() => {
        // Handle successful sign-out here if needed.
      })
      .catch((error) => {
        // Handle sign-out error here.
        console.error("Sign-out error:", error);
      });
  };

  return (
    <div>
      <DataBaseFeeder /> 
      {!user && (
        <div>
          <button onClick={handleSignIn}>SIGN UP</button>
        </div>
      )}

      {user && (
        <div>
          <button onClick={handleSignOut}>LOG OUT</button>
        </div>

        
      )}
    </div>
  );
}

export default Login;
