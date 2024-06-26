import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 2rem 0;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledModalContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: scroll;
  width: 80%;
  border-radius: 10px;
  z-index: 9999;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
  position: relative;
`;

export const StyledForm = styled.form``;

export const StyledFormTitle = styled.h2`
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
`;

export const StyledActionsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
export const StyledButton = styled.button`
  background-color: #e8e8e8;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
`;

export const StyledExitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 2rem;
  margin-right: 2rem;
  border: none;
  background-color: transparent;
  font-size: 20px;
`;
