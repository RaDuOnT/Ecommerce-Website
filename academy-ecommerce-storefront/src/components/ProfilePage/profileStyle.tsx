import styled from "styled-components";

export const MainProfileContainer = styled.div`
  display: flex;
  background-color: #e5e5e5;
  flex-direction: column;
  padding: 50px 20% 0;
  min-height: 100vh;
  @media (max-width: 1024px) {
    padding: 5%;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  padding: 20px;
  border-top: 1px solid #2f2b42;
  background-color: #3f3959;
  border-radius: 10px 10px 0 0;
`;

export const ProfileBody = styled.div`
  display: flex;
  gap: 20px;
  background-color: white;
  padding: 0 30px;
  border-radius: 0 0 10px 10px;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ProfileContainers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 2px;
  background-color: white;
  height: 100%;
  :last-of-type {
    width: 100%;
  }
  @media (max-width: 720px) {
    :not(:last-of-type) {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    padding: 0;
  }
`;

export const SelectedPageTitle = styled.h1`
  color: black;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

export const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: white;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const OptionSelect = styled.button`
  background-color: #efefef;
  border: none;
  text-align: left;
  padding: 15px 20px;
  width: 140px;
  cursor: pointer;
  :not(:last-of-type) {
    border-bottom: 1px solid #e5e5e5;
  }
  @media (max-width: 440px) {
    padding: 5px;
  }
`;

export const ProfileButton = styled.button<{
  backgroundColor?: string;
  border?: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor || "black"};
  border: ${({ border }) => border || "none"};
  text-transform: uppercase;
  color: white;
  border-radius: 5px;
  text-align: left;
  padding: 15px 20px;
  cursor: pointer;
  width: fit-content;
`;

export const OrderItem = styled.div`
  display: flex;
  // gap: 20px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  margin-bottom: 10px;
  justify-content: space-between;
  // width: 100%;
`;
export const OrderItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 10px;
  width: 100%;
  h2 {
    margin: 0 0 10px 0;
  }
  p {
    margin: 0;
    font-size: 13px;
    font-color: #2f4858;
  }
  @media (max-width: 720px) {
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export const OrderStatus = styled.div<{
  color?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  li {
    style: circle;
    color: ${({ color }) => color || "black"};
  }
`;

export const ItemFoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  @media (max-width: 720px) {
    width: 50px;
    height: 50px;
  }
`;

export const PageButtons = styled.button`
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px 15px;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
`;
