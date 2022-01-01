import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    console.log("login attempt");
  };

  return (
    <div className="loginPageContainer">
      <div className="loginPanelContainer">
        <div className="credentialFormContainer">
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
    </div>
  );
}

export default Login;
