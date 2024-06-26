import styled from "styled-components";

export const OrderSummaryContainer = styled.div`
  background-color: #2f4858;
  border-radius: 10px;
  padding: 1rem;
  margin: 3rem 1rem;
  align-self: flex-start;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media only screen and (max-width: 960px) {
    align-self: center;
  }

  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const OrderSummaryHeading = styled.h2`
  color: #ffbf33;
  font-weight: bold;
`;

export const OrderSummaryTotal = styled.p`
  font-weight: bold;
  color: green;
`;

export const OrderSummaryText = styled.p`
  color: #ffbf33;
`;

export const OrderSummaryProductsNumber = styled.p`
  font-weight: bold;
  color: #fff;
`;

export const OrderSummaryDetails = styled.div`
  padding: 0.5rem;
`;
export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;

export const CheckoutButton = styled.button`
  padding: 1rem;
  color: #2f4858;
  background-color: #ffbf33;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 10px;
  text-align: center;
`;

export const CheckoutActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const DiscountsArea = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
