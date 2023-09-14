import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import DataBaseFeeder from "../dataBaseFeeder";
import DataBaseFeeder2 from "../dataBaseFeeder2";

const auth = getAuth();

function Login2() {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
            <DataBaseFeeder />
            <DataBaseFeeder2/>
          <button onClick={handleSignOut}>LOG OUT</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!user ? (
            <div>
              {/*<button onClick={handleSignUp}>SIGN UP</button>*/}
              <p>Already have an account?</p>
              <button onClick={handleSignIn}>LOG IN</button>
            </div>
          ) : (
            <div>
            {/* <div>
                    <button onClick={handleSignIn}>LOG IN</button>
                    <p>Don't have an account?</p>
                    <button onClick={() => setIsSignUp(true)}>SIGN UP</button>
                </div> */}
          </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Login2;
