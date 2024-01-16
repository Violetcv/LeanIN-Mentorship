import React, { useState } from "react";
import { auth, googleProvider } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import SignedIn from "./signedin";
import "./signin.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  console.log(auth?.currentUser?.email);

  const signInWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true); // Set authentication status to true
    } catch (error) {
      console.error();
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true); // Set authentication status to true
    } catch (error) {
      console.error();
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false); // Set authentication status to false
    } catch (error) {
      console.error();
    }
  };

  return (
    <div className="signin">
      {isAuthenticated ? (
        // Render the SignedIn component when the user is authenticated
        <SignedIn logout={logout} />
      ) : (
        // Render the sign-in form when the user is not authenticated
        <div>
      <h2>Sign In</h2>
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="pretty-button-2" onClick={signInWithEmail}>
              Sign In
            </button>
          </form>
          <p>OR</p>
          <button className="pretty-button-2" onClick={signInWithGoogle}>Sign In With Google</button>
          <button className="pretty-button-2" onClick={logout}>Log Out</button>
        </div>
      </div>
      </div>
      )}
      {/* Add your sign-in form or content here */}
    </div>
  );
}

export default SignIn;
