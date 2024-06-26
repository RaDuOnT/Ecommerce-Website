import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean, location: any }>`
  top: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: #3f3959;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ location, open }) => location.pathname === "/" ? (open ? "translateX(-95%)" : "translateX(100%)") : (open ? "translateX(-90%)" : "translateX(100%)")};

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;


export const StyledMenuHomePage = styled(StyledMenu)`
  transform: ${({ open }) => (open ? "translateX(-95%)" : "translateX(100%)")};
`;

export const LinkDiv = styled.div`
  width: 280px;
  height: 42px;
  background-color: #2f2a44;
  border-radius: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.5rem;
`;
