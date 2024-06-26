import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(47, 72, 88, 0.75),
      rgba(0, 0, 0, 0)
    )
    100% 0 0 0/4px 0 0 0 stretch;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 560px) {
    padding: 0.5rem 0.5rem;
  }
  &:last-child {
    border-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(47, 72, 88, 0.75),
        rgba(0, 0, 0, 0)
      )
      100% 0 100% 0/4px 0 4px 0 stretch;
  }
`;

export const CartItemDetailsContainer = styled.div``;

export const CartItemAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const CartItemImage = styled.img`
  width: 100px;
`;

export const CartItemName = styled.p`
  width: 150px;
  text-align: center;
  color: #2f4858;
  @media only screen and (max-width: 560px) {
    width: 100px;
  }
`;
export const CartItemBrand = styled.h3`
  width: 150px;
  @media only screen and (max-width: 560px) {
    width: 100px;
  }
  text-align: center;
`;

export const CartItemQuantity = styled.p`
  text-align: center;
`;
export const CartItemPrice = styled.p`
  color: #636466;
  font-weight: bold;
  font-size: 18px;
  color: #2f4858;
  margin: 0;

  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

export const CartItemPriceTotal = styled.p`
  color: #636466;
  font-weight: bold;
  font-size: 18px;
  color: #2f4858;
  margin: 0;
`;

export const CartItemPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;

  @media only screen and (max-width: 450px) {
    width: auto;
  }
`;
export const RemoveItemButton = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: 1px 1px 2px 2px #888888;
  color: #f55757;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const StyledLine = styled.hr`
  margin-bottom: 20px;
  margin-top: 20px;
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(47, 72, 88, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

export const StyledLine2 = styled(StyledLine)`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 150px;
`;
