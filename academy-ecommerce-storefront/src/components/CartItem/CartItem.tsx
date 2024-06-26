import React, { useEffect, useState } from "react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetailsContainer,
  CartItemName,
  CartItemQuantity,
  CartItemBrand,
  CartItemPrice,
  CartItemAmountContainer,
  RemoveItemButton,
  CartItemPriceContainer,
  CartItemPriceTotal,
} from "./CartItem.styled";
import QuantityControl from "../common/Button/QuantityControl/QuantityControl";

import cartStore from "../../api/store/cartStore";
import { observer } from "mobx-react";

interface CartItemProps {
  id: string;
  brand: string;
  name: string;
  amount: number;
  price: number;
  image: string;
  product?: string;
  totalPrice: number;
}
// { id, brand, name, amount, image, price }: CartItemProps
const CartItem = observer(
  ({ id, brand, name, amount, image, price, totalPrice }: CartItemProps) => {
    cartStore.cart.items.find((item: any) => item._id === id);
    const removeItemHandler = () => {
    };
    const removeItemQuantity = () => {
      const productData = {
        _id: id,
        manufacturer: brand,
        name,
        price,
        image,
      };
      cartStore.subtractProductInCart(productData);
    };
    const addItemQuantity = () => {
      const productData = {
        _id: id,
        manufacturer: brand,
        name,
        price,
        image,
      };
      cartStore.addProductInCart(productData);
    };

    const setItemQuantity = () => {
    };

    return (
      <CartItemContainer>
        <CartItemImage src={image[0]} alt="Cart Item" />
        <CartItemDetailsContainer>
          <CartItemBrand>{brand}</CartItemBrand>
          <CartItemName>{name}</CartItemName>
        </CartItemDetailsContainer>
        <CartItemAmountContainer>
          <QuantityControl
            id={`${name}-id`}
            name={`${name}-name`}
            initialQuantity={amount}
            setItemQuantity={setItemQuantity}
            removeItemQuantity={removeItemQuantity}
            addItemQuantity={addItemQuantity}
          />
          <RemoveItemButton
            onClick={() => {
              cartStore.deleteProduct(id);
            }}
          >
            Elimină{" "}
          </RemoveItemButton>
        </CartItemAmountContainer>

        <CartItemPriceContainer>
          <CartItemPriceTotal>{`${
            cartStore.cart.items.find((item: any) => item._id === id).price*amount
          } lei`}</CartItemPriceTotal>
          {amount > 1 && <CartItemPrice>{`  ${price} lei buc.`}</CartItemPrice>}
        </CartItemPriceContainer>
      </CartItemContainer>
    );
  }
);

export default CartItem;
