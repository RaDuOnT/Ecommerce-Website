import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../store.context";

import Hamburger from "./Hamburger";
import { StyledMenu, LinkDiv } from "./MenuStyled";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  const { authStore } = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  const [loading, setLoading] = React.useState(true);
  let navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    await authStore.logout();
    setLoading(false);
    navigate("/");
  };

  // get UserData from local storage
  let loggedUserDataCopy = JSON.parse(
    JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
  );
  let loggedUserData;

  if (loggedUserDataCopy !== null) {
    loggedUserData = JSON.parse(loggedUserDataCopy);
  }

  return (
    <div>
      <StyledMenu open={open} location={location}>
        <LinkDiv>
          <Link to="/cos" style={{ textDecoration: "none", color: "white" }}>
            <p onClick={() => close()}>Comenzile mele</p>
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Link
            to="/produse"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p onClick={() => close()}>Barbati</p>
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Link
            to="/produse"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p onClick={() => close()}>Femei</p>
          </Link>
        </LinkDiv>
        <LinkDiv>
          {localStorage.getItem("access_token") ? (
            <>
              <Link
                to="/profil"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p onClick={() => close()}>Profilul Meu</p>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p onClick={() => close()}>Intra in cont</p>
              </Link>
            </>
          )}
        </LinkDiv>
        <LinkDiv>
          {localStorage.getItem("access_token") ? (
            <>
              <p
                onClick={() => {
                  handleLogout();
                  close();
                }}
              >
                Logout
              </p>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p onClick={() => close()}>Creaza un cont</p>
              </Link>
            </>
          )}
        </LinkDiv>
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
