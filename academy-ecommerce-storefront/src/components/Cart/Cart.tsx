import React, { useEffect, useState } from "react";
import { CartContainer } from "./Cart.styled";
import CartItem from "../CartItem/CartItem";
import { observer } from "mobx-react";
import cartStore from "../../api/store/cartStore";

const CartPage = observer(() => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    let loggedUserDataCopy = JSON.parse(
      JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
    );
    let loggedUserData;

    if (loggedUserDataCopy !== null) {
      loggedUserData = JSON.parse(loggedUserDataCopy);
    }
    cartStore.getProducts(loggedUserData.currentUser.id);
  }, []);

  return (
    <CartContainer>
      {cartStore.cart.items &&
        cartStore.cart.items.map((item: any, index: number) => {
          return (
            <CartItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              brand={item.manufacturer}
              price={item.price}
              amount={item.amount}
              totalPrice={item.totalPrice}
            />
          );
        })}
    </CartContainer>
  );
});

export default CartPage;
