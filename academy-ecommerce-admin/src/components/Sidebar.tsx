import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { AiOutlineWallet } from "react-icons/ai";
import { HiOutlineUsers, HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineRateReview } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import Badge from "./Badge";
import AvatarImage from "../assets/admin.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoginComponent from "../pages/LoginComponent";
import { stringify } from "querystring";

// import { darkThemeColor } from "../utils";
// import useMediaQuery from "@mui/material/useMediaQuery";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  let navigate = useNavigate();
  const location = useLocation();
  // const mediaMatches = useMediaQuery('(min-width:780px)');
  if (location.pathname === "/") {
    return <LoginComponent />;
  }

  const focusTab = (string: string) => {
    return {
      backgroundColor: location.pathname === string && window.innerWidth > 425 ? "#6100d4" : "",
      borderRadius: location.pathname === string && window.innerWidth > 425 ? "10px" : "",
      textDecoration: "none",
    };
  };
  
  const LogOut = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload()
  }
  
  // get UserData from local storage
  let loggedUserDataCopy = JSON.parse(JSON.stringify(localStorage.getItem('AuthenticatedCustomer')))
  let loggedUserData;

  if(loggedUserDataCopy !== null) {
    loggedUserData = JSON.parse(loggedUserDataCopy)
  } 


  return (
    <Container>
      <NavContainer>
        <ProfileContainer>
          <Avatar src={AvatarImage} />
          <Name>{loggedUserData.currentUser.email}</Name>
          <Badge content="Admin" />
          <SignOut onClick={LogOut}>Sign out</SignOut>
        </ProfileContainer>

        <AnchorsContainer>
          <Anchors>
            <Link to="/dashboard" style={focusTab("/dashboard")}>
              <Anchor>
                <RiHomeLine />
                <Paragraph>Dashboard</Paragraph>
              </Anchor>
            </Link>

            <Link to="/products" style={focusTab("/products")}>
              <Anchor>
                <RiFileCopyLine />
                <Paragraph>Products</Paragraph>
              </Anchor>
            </Link>

            <Link to="/invoices" style={focusTab("/invoices")}>
              <Anchor>
                <AiOutlineWallet />
                <Paragraph>Invoices</Paragraph>
              </Anchor>
            </Link>

            <Link to="/orders" style={focusTab("/orders")}>
              <Anchor>
                <HiOutlineShoppingCart />
                <Paragraph>Orders</Paragraph>
              </Anchor>
            </Link>

            <Link to="/feedback" style={focusTab("/feedback")}>
              <Anchor>
                <VscFeedback />
                <Paragraph>Customers feedback</Paragraph>
              </Anchor>
            </Link>

            <Link to="/users" style={focusTab("/users")}>
              <Anchor>
                <HiOutlineUsers />
                <Paragraph>Users</Paragraph>
              </Anchor>
            </Link>

            <Link to="/reviews" style={focusTab("/reviews")}>
              <Anchor>
                <MdOutlineRateReview />
                <Paragraph>Products reviews</Paragraph>
              </Anchor>
            </Link>

          </Anchors>
        </AnchorsContainer>
      </NavContainer>
      <Content>{children}</Content>
    </Container>
  );
};

const Content = styled.div`
  width: 78%;
  height: 91vh;
  @media screen and (min-width: 426px) and (max-width: 767px) {
    height: calc(91vh - 408px);
  }
  @media screen and (min-width: 769px) and (max-width: 1100px) {
    margin-left: unset;
    width: 70%;
    padding: 0;
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-left: unset;
    width: 100%;
    padding: 0;
  } ;
`;

const NavContainer = styled.div`
  width: 20%;
  min-width: 200px;
  height: 97vh;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 425px) and (max-width: 768px) {
    width: 100%;
    position: unset;
    height: max-content;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: max-content;
    z-index: 1000;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 425px) {
    display: none;
  }

  @media screen and (min-width: 425px) and (max-width: 768px) {
    order: 2;
    margin: 1rem;
  }
`;

const Avatar = styled.img`
  height: 6rem;
  border-radius: 6rem;
  margin-top: 20%;
  @media screen and (min-width: 425px) and (max-width: 768px) {
    margin-top: unset;
  }
`;

const Name = styled.h1`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const Container = styled.div`
  display: flex;
  margin: 0.7rem;
  justify-content: space-around;
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem; */
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    margin-bottom: 50px;
  }
`;

const AnchorsContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  flex: 1;
`;

const Anchors = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    flex-direction: row;
    margin: 0;
    padding: 0;
    height: unset;
    justify-content: space-around;
  }
`;

// height icons is hardcoded
const Anchor = styled.li`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 10% 0;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  svg {
    font-size: 1.1rem;
  }
`;

const Paragraph = styled.p`
  @media screen and (min-width: 320px) and (max-width: 425px) {
    display: none;
  }
`;

const SignOut = styled.p`
  color: white;
  margin: 10 0 0;
  font-size: 12px;
  border-bottom: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`

export default Sidebar;
