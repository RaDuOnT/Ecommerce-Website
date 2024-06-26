import styled from "styled-components";

interface ContainerProps {
  padding?: string;
  margin?: string;
}

export const StyledOrderItemContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 6rem;
  padding: ${(props) => props.padding};
`;
export const StyledOrderItemImageContainer = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
`;
export const StyledOrderItemImage = styled.img`
  width: 100%;
`;
export const StyledOrderItemImageCount = styled.div`
  color: #2f4858;
  background-color: #ffbf33;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.3rem;
`;

export const StyledOrderItemPrice = styled.p`
  color: #2f4858;
  font-weight: bold;
`;
export const StyledOrderItemName = styled.p`
  color: #2f4858;
  width: 200px;
`;
