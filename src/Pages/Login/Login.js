import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../../firebase/firebase.initialize";
import Header from "../common/Header";
import "./Login.css";
import { Button } from "react-bootstrap";

initializeAuthentication();
const provider = new GoogleAuthProvider();
const Login = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  function handleGoogleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { displayName, email, photoUrl } = result.user;

        const displayUser = {
          name: displayName,
          email: email,
          photo: photoUrl,
        };
        console.log(user);
        setUser(displayUser);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // setUser({});
        console.log(user);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  // observer of states
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);
  return (
    <>
      <Header />

      <div className="login_form">
        {!user.name ? (
          <div>
            <h2>Please Login</h2>
            <Button variant="warning" onClick={handleGoogleLogin}>
              Login with google
            </Button>
          </div>
        ) : (
          <Button onClick={logOut}>Log out</Button>
        )}
        {user.name && (
          <div className="display_user mt-5">
            <h2>Welcome {user.displayName}</h2>
            <h4>User Email: {user.email}</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
