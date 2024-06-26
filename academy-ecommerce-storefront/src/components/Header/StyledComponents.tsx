import styled from "styled-components";

export const Image = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const InfoDiv = styled.div`
  margin-bottom: 8px;
`;

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #3f3959;
  padding: 10px 20%;
  color: white;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    padding: 10px 10%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const InnerContainer = styled.div`
  position: absolute;
  right: -10px;
  top: -6px;
  background-color: #ffbf33;
  border-radius: 50px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BadgeTxt = styled.p`
  color: black;
  font-size: x-small;
  transition: all 0.5s;

  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0.01;
  }
`;

export const AccountButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  border-top: 1px solid white;
  padding-top: 10px;
`;

export const HeaderDropdown = styled.div`
  opacity: 0;
  gap: 20px;
  position: absolute;
  top: 35px;
  right: -120px;
  left: -120px;
  background-color: #282c34;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  cursor: default;
  text-align: center;
  transition: 0.5s;
  pointer-events: none;
  text-transform: none;
  z-index: 1;
  @media (max-width: 1024px) {
    right: 0;
  }
`;

export const AccountButton = styled.button<{
  color?: string;
  background?: string;
}>`
  width: 150px;
  font-size: 15px;
  height: 40px;
  color: ${(props) => props.color || "white"};
  border: none;
  background: ${(props) => props.background || "none"};
  cursor: pointer;
`;
export const HeaderButton = styled.label<{
  hover?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  height: 35px;
  &:hover {
    ${({ hover }) =>
      hover
        ? `${HeaderDropdown} {
      opacity: 1;
      pointer-events: all;
    }`
        : ""}
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    ${HeaderDropdown} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
