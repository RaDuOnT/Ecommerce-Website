import React, { useContext, useEffect } from "react";
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
} from "./StyledComponents";
import Menu from "../BurgerMenu/Menu";
import logo from "../../images/Logo.png";
import cart from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store.context";
import {observer} from "mobx-react-lite"
import cartStore from "../../api/store/cartStore";
import { toJS } from "mobx";


const Header = observer(() => {
  let cartItems = cartStore.cart.items ? cartStore.cart.items.length : 0;

  const { authStore } = useContext(StoreContext);
  const authenticated = authStore.isAuthenticated();

  const [loading, setLoading] = React.useState(true);

  const handleLogout = async () => {
    setLoading(true);
    await authStore.logout();
    setLoading(false);
  };

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
    <HeaderComponent>
      <HeaderContent>
        <a href="/">
          <Image src={logo} alt="Logo"></Image>
        </a>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/produse/barbati"
        >
          <HeaderButton>Barbati</HeaderButton>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/produse/femei"
        >
          <HeaderButton>Femei</HeaderButton>
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
            <img src={cart} alt="Cart" />
          </Link>

          <InnerContainer>
            <BadgeTxt>{cartItems}</BadgeTxt>
          </InnerContainer>
        </Wrapper>
        <HeaderButton hover>
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
})

export default Header;
