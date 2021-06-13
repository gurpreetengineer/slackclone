import React from "react";
import { Button } from "@material-ui/core";
import db, { auth, provider } from "../firebase/firebase";
import SlackLogo from "../assets/logo512.png";
import "./authCustomCss/Login.css";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log("result >> ", result))
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={SlackLogo} alt="" />
        <h1>Sign in to WhyFutz Programmer's world!</h1>
        <p>garrybamrah.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
