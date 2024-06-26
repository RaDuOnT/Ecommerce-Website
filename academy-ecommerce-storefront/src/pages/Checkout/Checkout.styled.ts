import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const CartHeading = styled.h2`
margin-top: 1rem;
  text-align: center;
`;
