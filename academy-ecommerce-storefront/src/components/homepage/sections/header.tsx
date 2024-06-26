import React, { useContext, useEffect, useState } from "react";
import "../css/header.css";
import {
  Image,
  HeaderComponent,
  HeaderContent,
  AccountButtonsDiv,
  AccountButton,
  InnerContainer,
  BadgeTxt,
  Wrapper,
  HeaderButton,
  HeaderDropdown,
  InfoDiv,
} from "../../Header/StyledComponents";
import Menu from "../../BurgerMenu/Menu";
import logo from "../../../images/Logo.png";
import cart from "../../../images/shopping-cart.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../store.context";
import cartStore from "../../../api/store/cartStore";

const HeaderHomePage = () => {
  let cartItems = cartStore.cart.items ? cartStore.cart.items.length : 0;
  const [headerColor, setHeaderColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 100
      ? setHeaderColor("#3f3959")
      : setHeaderColor("transparent");
  };
  const { authStore } = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  const [loading, setLoading] = React.useState(true);

  const handleLogout = async () => {
    setLoading(true);
    await authStore.logout();
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  useEffect(() => {

    let loggedUserDataCopy = JSON.parse(
      JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
    );
    let loggedUserData;

    if (loggedUserDataCopy !== null) {
      loggedUserData = JSON.parse(loggedUserDataCopy);
    }
    cartStore.getProducts(loggedUserData.currentUser.id);
  }, []);

  // get UserData from local storage
  let loggedUserDataCopy = JSON.parse(
    JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
  );
  let loggedUserData;

  if (loggedUserDataCopy !== null) {
    loggedUserData = JSON.parse(loggedUserDataCopy);
  }

  return (
    <HeaderComponent
      className="header-homepage"
      style={{ backgroundColor: headerColor }}
    >
      <HeaderContent>
        <a href="/">
          <Image src={logo} alt="Logo"></Image>
        </a>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/produse"
        >
          <HeaderButton className="header-element">Produse</HeaderButton>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/produse/barbati"
        >
          <HeaderButton className="header-element">Barbati</HeaderButton>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/produse/femei"
        >
          <HeaderButton className="header-element">Femei</HeaderButton>
        </Link>
      </HeaderContent>
      <HeaderContent>
        <Wrapper>
          <HeaderDropdown>
            {cartItems === 0 ? (
              <p>Nu ai niciun produs in cos</p>
            ) : (
              <p>Produse in cos: {cartItems}</p>
            )}
          </HeaderDropdown>
          <Link to="/cos">
            <img src={cart} alt="Cart" className="header-cart-image" />
          </Link>

          <InnerContainer>
            <BadgeTxt>{cartItems}</BadgeTxt>
          </InnerContainer>
        </Wrapper>
        <HeaderButton hover className="header-element ">
          Contul meu
          <HeaderDropdown>
            {localStorage.getItem("access_token") ? (
              <InfoDiv>{loggedUserData.currentUser.email}</InfoDiv>
            ) : (
              <InfoDiv>Intra in cont pentru a vedea comenzile tale</InfoDiv>
            )}

            <AccountButtonsDiv>
              {localStorage.getItem("access_token") ? (
                <>
                  <Link to="/profil">
                    <AccountButton color="black" background="#F4B733">
                      Contul meu
                    </AccountButton>
                  </Link>
                  <AccountButton onClick={handleLogout} color="#F4B733">
                    Logout
                  </AccountButton>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <AccountButton color="black" background="#F4B733">
                      Intra in cont
                    </AccountButton>
                  </Link>
                  <Link to="/register">
                    <AccountButton color="#F4B733">
                      Creeaza un cont
                    </AccountButton>
                  </Link>
                </>
              )}
            </AccountButtonsDiv>
          </HeaderDropdown>
        </HeaderButton>
        <Menu></Menu>
      </HeaderContent>
    </HeaderComponent>
  );
};

export default HeaderHomePage;
