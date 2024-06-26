import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./pages/Dashboard/Dashboard";
import Invoices from "./pages/Invoices/Invoices";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import ProductsReviews from "./pages/ProductsReviews/ProductsReviews";
import CustomersFeedback from "./pages/CustomersFeedback/CustomersFeedback"
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem('access_token') && location.pathname !== '/register') {
      navigate('/')
    }
  }, [location.pathname])

  if (localStorage.getItem('access_token') && location.pathname=== '/') {
    navigate('/dashboard')
  }

  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" index element={<MainContent/>}/>
          <Route path="products" element={<Products />}/>
          <Route path="/invoices" element={<Invoices />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/feedback" element={<CustomersFeedback />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/reviews" element={<ProductsReviews />}/>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
