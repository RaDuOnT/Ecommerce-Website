import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { CartHeading, CheckoutContainer } from "./Checkout.styled";
import { observer } from "mobx-react";
import cartStore from "../../api/store/cartStore";

const Checkout = observer(() => {
  // type any for now until we fetch the data from db
  const [cartItems, setCartItems] = useState<any>([]);
  const [discounts, setDiscounts] = useState<number>(0);
  const [fullPrice, setFullprice] = useState<number>(1333);
  const [shippingFee, setShippingFee] = useState<number>(0);

  return (
    <>
      <div style={{minHeight: "calc(100vh - 280px)"}}>
        <CartHeading>Conținutul coșului tău de cumpărături.</CartHeading>

      <CheckoutContainer>
        <Cart />
        <OrderSummary
          discounts={discounts}
          fullPrice={cartStore.cart.total}
          shippingFee={shippingFee}
        />
      </CheckoutContainer>
      </div>
      
    </>
  );
});

export default Checkout;
