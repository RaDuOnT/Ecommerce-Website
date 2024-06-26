import styled from "styled-components";

interface ContainerProps {
  padding?: string;
  margin?: string;
}

export const OrderSummaryPicturesContainer = styled.div<ContainerProps>`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: ${(props) => props.padding};
`;
