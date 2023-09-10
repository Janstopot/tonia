import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

function Admin() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Add an auth state change listener to update the user state.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user)
    });

    // Clean up the listener when the component unmounts.
    return () => unsubscribe();
  }, []);

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

export default Admin;
