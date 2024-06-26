import styled from "styled-components";

export const StyledCheckoutDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const StyledOrderSummaryContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
