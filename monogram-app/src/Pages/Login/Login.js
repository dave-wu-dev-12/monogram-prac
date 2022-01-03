import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import SubHeader from "../../Components/SubHeader/SubHeader";

import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    console.log("login attempt");
  };

  return (
    <div className="loginPageContainer">
      <div className="loginFormContainer">
        <div>
          <Header styleName="loginHeader" text="Login"></Header>
          <SubHeader
            styleName="loginSubHeader"
            text="Please sign in to Continue"
          ></SubHeader>
        </div>
        <div className="loginForm">
          <Input
            styleName={"login-input"}
            type={"text"}
            placeholder="Username or Email"
            value={userName}
            onChange={setUserName}
          ></Input>
          <Input
            styleName={"login-input"}
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={setPassword}
          ></Input>
          <Button
            styleName={"login-button"}
            onClick={validateLogin}
            text={"Login"}
          ></Button>
        </div>
      </div>
      <SubHeader
        styleName="signUpSubheader"
        text="Don't have an account? Sign up"
      ></SubHeader>
    </div>
  );
}

export default Login;
