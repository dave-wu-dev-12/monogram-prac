import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import SubHeader from "../../Components/SubHeader/SubHeader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import StarRating from "../../Components/StarRating/StarRating";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedStar, setSelectedStar] = useState(0);

  const dispatch = useDispatch();

  const validateLogin = () => {
    console.log(`user login with name: ${userName}`);
    dispatch({ type: "login", userName: userName });
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
            styleName={
              userName.trim() == ""
                ? "login-button disabled"
                : "login-button active"
            }
            onClick={validateLogin}
            text={"Login"}
          ></Button>
        </div>
        <SubHeader
          styleName="signUpSubheader"
          text="Don't have an account? Sign up"
        ></SubHeader>
      </div>
      <h1>Rate this site</h1>
      <h3>
        <StarRating
          count={5}
          selectedStar={selectedStar}
          onSelect={setSelectedStar}
        />
      </h3>
    </div>
  );
}

export default Login;
