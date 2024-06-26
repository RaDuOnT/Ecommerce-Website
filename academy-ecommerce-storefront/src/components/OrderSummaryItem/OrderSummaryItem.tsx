import React from "react";
import {
  StyledOrderItemContainer,
  StyledOrderItemImageContainer,
  StyledOrderItemImage,
  StyledOrderItemImageCount,
  StyledOrderItemName,
  StyledOrderItemPrice,
} from "./OrderSummaryItem.styled";

interface Props {
  image: string;
  price: number;
  brand: string;
  name: string;
  quantity: number;
}

const OrderSummaryItem = ({ image, price, brand, name, quantity }: Props) => {
  return (
    <StyledOrderItemContainer>
      <StyledOrderItemImageContainer>
        <StyledOrderItemImage src={image[0]} alt="Product image" />
        <StyledOrderItemImageCount>{quantity}</StyledOrderItemImageCount>
      </StyledOrderItemImageContainer>
      <StyledOrderItemName>{`${name}`}</StyledOrderItemName>
      <StyledOrderItemPrice>{`${price} RON`}</StyledOrderItemPrice>
    </StyledOrderItemContainer>
  );
};

export default OrderSummaryItem;
