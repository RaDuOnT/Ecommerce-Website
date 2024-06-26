import styled from "styled-components";

export const ApplyDiscountContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  padding: 6px 20px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const StyledClassicButton = styled.button`
  padding: 1rem;
  color: #2f4858;
  background-color: #ffbf33;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 10px;
  text-align: center;
`;
