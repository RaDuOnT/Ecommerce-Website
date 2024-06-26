import { observer } from "mobx-react";
import React from "react";
import cartStore from "../../api/store/cartStore";
import OrderSummaryItem from "../OrderSummaryItem/OrderSummaryItem";
import { OrderSummaryPicturesContainer } from "./OrderSummaryPictures.styled";
import { useEffect} from "react";

const OrderSummaryPictures: React.FC = observer (() => {

  useEffect(() => {
    cartStore.getProducts("cartnou9");
  }, []);

  return (
    <OrderSummaryPicturesContainer padding="3rem 2rem 1rem">
      {cartStore.cart.items &&
        cartStore.cart.items.map((item: any, index: number) =>{
        return (
          <OrderSummaryItem
            key={index}
            image={item.image}
            price={item.price}
            brand={item.brand}
            name={item.name}
            quantity={item.quantity}
          />
        );
      })}
    </OrderSummaryPicturesContainer>
  );
});

export default OrderSummaryPictures;
