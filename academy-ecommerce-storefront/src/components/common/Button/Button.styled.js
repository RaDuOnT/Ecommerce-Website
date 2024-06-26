import styled from "styled-components";

export const StyledButton = styled.button`
  /* how to setup a theme property */
  background-color: ${({ theme }) => theme.primary || "gray"};
`;

// how to extend a react/ styled component
export const ExtendComponent = styled(StyledButton)`
  height: 100px;
  width: 100px;
`;
