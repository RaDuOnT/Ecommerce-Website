import styled from "styled-components";
import bgImage from "../../images/backgroundImg.jpg";

export const ContentPage = styled.div`
  background-image: url("${bgImage}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const SignInContainer = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 40px;
  margin: 0 auto;
  background-color: #181818;
  width: 100%;
  max-width: 400px;
  transition: 0.3s;
  border-radius: 30px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const SignUpContainer = styled(SignInContainer)`
  max-width: 900px;
`;

export const Logo = styled.img`
  border-radius: 30px;
  width: 120px;
  display: block;
  margin: auto;
  transition: 0.3s;
  @media (max-width: 600px) {
    width: 100px;
  }
`;
export const Title = styled.h1`
  transition: 0.3s;
  color: #fff;
  font-size: 32px;
  margin: 20px 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  height: 50px;
  background-color: #d9d9d9;
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 5px 2px 10px #b93a87;
  }
  &:active {
    box-shadow: 3px 4px 6px #b93a87;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 35px;
    font-size: 12px;
  }
`;

export const BackBtn = styled(Button)`
  background-color: transparent;
  color: #d9d9d9;
  border: 3px solid #d9d9d9;
`;

export const BottomText = styled.h3`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-top: 30px;
`;

export const SignUpBtn = styled.button`
  text-decoration: none;
  margin: auto;
  display: block;
  margin-top: 15px;
  width: 150px;
  height: 40px;
  background-color: #181818;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #333;
  }
`;
