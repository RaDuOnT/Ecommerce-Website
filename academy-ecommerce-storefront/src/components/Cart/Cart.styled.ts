import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  @media only screen and (max-width: 960px) {
    padding: 1rem;
    width: 90%;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    padding: 1rem 0;
  }
`;
