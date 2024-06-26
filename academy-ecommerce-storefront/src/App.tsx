import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme/theme";
import { StyledButton } from "./components/common/Button/Button.styled";
import Checkout from "./pages/Checkout/Checkout";
import "./App.css";
import Header from "./components/Header/header";
import HeaderHomePage from "./components/homepage/sections/header";
import Footer from "./components/Footer/footer";
import StorePage from "./pages/StorePage/storePage";
import CheckoutDetails from "./pages/CheckoutDetails/CheckoutDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./components/homepage";
import { Profile } from "./components/ProfilePage/profile";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import HomePage from "./components/homepage";
import RegisterComponent from "./components/LoginComponent/RegisterComponent";
import { Provider } from "mobx-react";
import { productStore } from "./api/store/productStore";
import { reviewStore } from "./api/store/reviewStore";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(light);

  // useLocation hook returns the current location object
  // from the react-router-dom package
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    // If the current route is the login page, then redirect to the home page
    if (
      location.pathname === "/login" &&
      localStorage.getItem("access_token")
    ) {
      navigate("/");
    }
    if (
      location.pathname === "/profil" &&
      !localStorage.getItem("access_token")
    ) {
      navigate("/");
    }
  }, [location.pathname]);

  const themeChangeHandler = () => {
    // basic temporary toggle
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <Provider productStore={productStore} reviewStore={reviewStore}>
      <ThemeProvider theme={theme}>
        {/* Render the header component only if the current route is not the login page */}
        {location.pathname !== "/login" &&
          location.pathname !== "/register" &&
          location.pathname !== "/" && <Header />}
        {location.pathname == "/" && <HeaderHomePage />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cos" element={<Checkout />} />
          <Route path="/trimite-comanda" element={<CheckoutDetails />} />
          <Route path="/produse" element={<StorePage />} />
          <Route path="/parfum/:id" element={<ProductDetails />} />
          <Route path="/produse/:gender" element={<StorePage />} />
          <Route path="/profil" element={<Profile />} />
          {/* Add a route for the login page */}
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Footer />}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
