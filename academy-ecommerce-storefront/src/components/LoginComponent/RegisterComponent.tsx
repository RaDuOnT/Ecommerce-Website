import {
  ContentPage,
  SignInContainer,
  Logo,
  Title,
  Button,
  BottomText,
  SignUpBtn,
  BackBtn,
} from "./StyledComponents";
import "./style.css";
import LogoImg from "../../images/LogoWhite.svg";
import InputControl from "../common/InputControl";
import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import userStore from "../../api/store/userStore";
import cartStore from "../../api/store/cartStore";

const RegisterComponent: React.FC = observer(() => {
  const [sectionDisplayed, setSectionDisplayed] = React.useState<boolean>(true);
  const [email, setEmail] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("+40");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [phoneNumberError, setPhoneNumberError] = React.useState<string | null>(
    null
  );
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState<
    string | null
  >(null);

  const handleNext = async () => {
    // if (emailError === "" && phoneNumberError === "") {
    //   if ((await userStore.uniqueEmail(email)) === false) {
    //     setEmailError("* Exista deja un cont cu aceasta adresa!");
    //   } else {
    setSectionDisplayed(!sectionDisplayed);
    //   }
    // }
    // if (emailError === null) {
    //   setEmailError("* Email invalid");
    // }
    // if (phoneNumberError === null) {
    //   setPhoneNumberError("* Telefon invalid!");
    // }
  };
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("* Parolele nu coincid!");
    }
    if (passwordError === null) {
      setPasswordError("* Insereaza o parola!");
    }
    if (password === confirmPassword && passwordError === "") {
      setConfirmPasswordError("");
      const newUser = {
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      };
      const newUserId = await userStore.postUser(newUser);
      console.log(newUserId);
      cartStore.postProducts({
        userId: newUserId,
        total: 0,
        items: [],
      });
      window.location.href = "/login";
    }
  };

  return (
    <ContentPage>
      <SignInContainer>
        <Link to={"/"}>
          <Logo src={LogoImg} alt="Parfume Company" />
        </Link>
        <Title>Creeaza Cont</Title>
        {sectionDisplayed === true ? (
          <>
            <InputControl
              type={"email"}
              label={"Email"}
              id={"email"}
              value={email}
              setValue={setEmail}
              setError={setEmailError}
              errorMessage={emailError}
            />
            <InputControl
              type={"text"}
              phoneLength={12}
              label={"Telefon"}
              id={"phoneNumber"}
              value={phoneNumber}
              setValue={setPhoneNumber}
              setError={setPhoneNumberError}
              errorMessage={phoneNumberError}
            />
            <Button onClick={handleNext}>Urmatorul</Button>
          </>
        ) : (
          <>
            <InputControl
              type={"password"}
              label={"Parola"}
              id={"password"}
              value={password}
              setValue={setPassword}
              setError={setPasswordError}
              errorMessage={passwordError}
            />
            <InputControl
              type={"password"}
              label={"Confirma Parola"}
              id={"confirmPassword"}
              value={confirmPassword}
              setValue={setConfirmPassword}
              setError={setConfirmPasswordError}
              errorMessage={confirmPasswordError}
            />
            <div className="wrap">
              <BackBtn onClick={handleNext} style={{ margin: "0px" }}>
                Inapoi
              </BackBtn>
              <Button onClick={handleRegister} style={{ margin: "0px" }}>
                Inregistrare
              </Button>
            </div>
          </>
        )}
        <BottomText>
          Ai deja cont?
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <SignUpBtn>Autentifica-te</SignUpBtn>
          </Link>
        </BottomText>
      </SignInContainer>
    </ContentPage>
  );
});

export default RegisterComponent;
