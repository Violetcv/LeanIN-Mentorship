import React from 'react';
import { auth } from '../firebase-config';
// import { signOut } from 'firebase/auth';

function SignedIn() {
    const userEmail = auth?.currentUser?.email;
    // const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status


    // const logout = async () => {
    //     try {
    //       await signOut(auth);
    //       setIsAuthenticated(false); // Set authentication status to false
    //     } catch (error) {
    //       console.error();
    //     }
    //   };

  return (
    <div className="signedin">
        <h1>You are successfully signed in with email id: {userEmail}</h1>
        {/* <button className="pretty-button-2" onClick={logout}>Log Out</button> */}
    </div>
  );
  
}

export default SignedIn;