import {
  ContentPage,
  SignInContainer,
  Logo,
  Title,
  Button,
} from "./StyledComponents";
import LogoImg from "../../images/LogoWhite.svg";
import InputControl from "../../components/InputControl";
import React , { useContext, useState }from "react";
import { StoreContext } from "../../store/auth.Context";
import { useNavigate } from "react-router-dom";
import Notification from "../../components/Notification/Notification";

const LoginComponent: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const { authStore } = useContext(StoreContext);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [credentials, setCredentials] = React.useState<boolean>(false)

  let navigate = useNavigate();

  const validationLogIn = async () => {
    if (!(/\S+@\S+\.\S+/.test(username)) || password === '' || username === '') return

    try{  
      await authStore.login({username, password});
      if(localStorage.getItem("access_token")!==null && localStorage.getItem("AuthenticatedCustomer")?.includes('admin@admin.com')){
        navigate("/dashboard");
      }else {
        console.log('bad credentials')
        setShowNotification(true)
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <ContentPage>
      <Notification 
      text={'Bad credentials'}
      status={'fail'}
      title={'Failed to log in'}
      show={showNotification}
      />
      <SignInContainer>
        <Logo src={LogoImg} alt="Parfume Company" />
        <Title>Salut!</Title>
        <InputControl
          type={"email"}
          label={"Email"}
          value={username}
          setValue={setUsername}
          checkCredentials={setCredentials}
        />
        <InputControl
          type={"password"}
          label={"Parola"}
          value={password}
          setValue={setPassword}
          checkCredentials={setCredentials}
        />
        <Button onClick={validationLogIn}>Autentificare</Button>

      </SignInContainer>
    </ContentPage>
  );
};

export default LoginComponent;
