import styled from "styled-components";
export const StyledQuantityControlWrapper = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  height: ${({ height }) => height || "auto"};
`;

export const StyledQuantityButton = styled.button<{ borderradius: string }>`
  height: 100%;
  background-color: #fff;
  font-weight: bold;
  font-size: 22px;
  color: #999;
  border-radius: ${(props) => props.borderradius || "0"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const StyledNumberInput = styled.input`
  margin: 0 0.5rem;
  padding: 0;
  text-align: center;
  border: none;
  font-size: 16px;
  & ::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media only screen and (max-width: 450px) {
    margin: 0;
  }
`;
