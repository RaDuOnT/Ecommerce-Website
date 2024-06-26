import {
  ContentPage,
  SignInContainer,
  Logo,
  Button,
  BottomText,
  SignUpBtn,
} from "./StyledComponents";
import "./style.css";
import LogoImg from "../../images/LogoWhite.svg";
import InputControl from "../common/InputControl";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store.context";

const LoginComponent = () => {
  const { authStore } = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  const handleLogin = async () => {
    try {
      const response = await authStore.login({ username, password });
      if (localStorage.getItem("access_token") !== null) {
        window.location.href = "/profil";
      } else {
        setEmailError("* Date invalide");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [username, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string | null>(null);

  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string>("");

  return (
    <ContentPage>
      <SignInContainer>
        <Link to={"/"}>
          <Logo src={LogoImg} alt="Parfume Company" />
        </Link>
        <InputControl
          type={"email"}
          label={"Email"}
          value={username}
          setValue={setEmail}
          setError={setEmailError}
          errorMessage={emailError}
        />
        <InputControl
          type={"password"}
          label={"Parola"}
          value={password}
          setValue={setPassword}
          setError={setPasswordError}
          errorMessage={passwordError}
        />
        <Button onClick={handleLogin}>Autentificare</Button>
        <BottomText>
          Nu ai cont? Nu-ți face griji!
          <Link style={{ textDecoration: "none" }} to={"/register"}>
            <SignUpBtn>Inregistreaza-te</SignUpBtn>
          </Link>
        </BottomText>
      </SignInContainer>
    </ContentPage>
  );
};

export default LoginComponent;
