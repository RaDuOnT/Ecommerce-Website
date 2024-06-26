import styled from "styled-components";

interface StyledFormContainerProps {
  width?: string;
  padding?: string;
  mobilePadding?: string;
  mobileWidth?: string;
}

export const StyledFormContainer = styled.form<StyledFormContainerProps>`
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};

  @media only screen and (max-width: 600px) {
    padding: ${(props) => props.mobilePadding};
    width: ${(props) => props.mobileWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledFormTitle = styled.h2`
  color: #2f4858;
  font-weight: bold;
`;

export const StyledInputWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: #2f4858;
`;

export const StyledInput = styled.input`
  padding: 5px;
`;
export const StyledInputRow = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const FormButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFormButton = styled.button`
  padding: 1rem;
  color: #2f4858;
  background-color: #ffbf33;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  width: 20%;
  cursor: pointer;
  :disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;
