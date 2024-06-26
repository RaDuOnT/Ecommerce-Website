import React from "react";
import {
  StyledCustomInputContainer,
  StyledInput,
  StyledLabel,
  StyledTextArea,
} from "./CustomInput.styled";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value?: any;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

// This component takes as props the label text, the type, the name attribute, value if needed and the onChange function of the input.
const CustomInput = ({ label, type, name, onChange, value }: InputProps) => {
  return (
    <StyledCustomInputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>

      {type === "textarea" ? (
        <StyledTextArea
          name={name}
          id={name}
          defaultValue={value}
          onChange={(e) => {
            onChange(e);
          }}
        />
      ) : (
        <StyledInput
          type={type}
          name={name}
          id={name}
          onChange={(e) => {
            onChange(e);
          }}
          defaultValue={value}
        />
      )}
    </StyledCustomInputContainer>
  );
};

export default CustomInput;
