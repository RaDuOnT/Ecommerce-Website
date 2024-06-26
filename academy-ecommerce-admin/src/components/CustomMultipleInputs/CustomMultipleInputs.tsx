import React, { useState } from "react";
import {
  StyledLabel,
  StyledCustomInputContainer,
  StyledInput,
} from "../CustomInput/CustomInput.styled";
import { StyledButton } from "../Modal/Modal.styled";
import { StyledMultipleTitle } from "./CustomMultipleInputs.styled";
import { fromCamelToRegular } from "../../util/utility";
interface InputProps {
  label: string;
  name: string;
  value?: any;
  onChange: any;
  onDelete: any;
}

const CustomMultipleInputs = ({
  label,
  name,
  value,
  onChange,
  onDelete,
}: InputProps) => {
  const [currentInputs, setCurrentInputs] = useState<string[]>(value);
  const addInput = () => {
    setCurrentInputs((prevInputs) => [...prevInputs, ""]);
  };
  const removeInput = (index: number) => {
    const newArr = [...currentInputs];
    const filteredArray = newArr.filter((item, idx) => idx !== index);

    setCurrentInputs(filteredArray);
    onDelete(name, index);
  };
  const onChangeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputsCopy = [...currentInputs];
    inputsCopy[index] = e.target.value;
    setCurrentInputs(inputsCopy);
  };

  return (
    <StyledCustomInputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>

      {currentInputs?.map((item: string, index: number) => {
        return (
          <StyledCustomInputContainer key={index}>
            <StyledMultipleTitle>{`${fromCamelToRegular(name)} #${
              index + 1
            }`}</StyledMultipleTitle>
            <StyledInput
              name={`${name}${index}`}
              id={`${name}${index}`}
              onChange={(e) => {
                onChangeInputHandler(e, index);
                onChange(e, index, name);
              }}
              //   trb sa rezolv cu value

              value={currentInputs[index]}
            />
            {currentInputs.length !== 1 && (
              <StyledButton
                type="button"
                style={{ width: "12rem", marginTop: '12px', color: '#fff', backgroundColor: '#b5101a', fontWeight: '500' }}
                onClick={() => {
                  removeInput(index);
                }}
              >{`Delete ${fromCamelToRegular(label)}`}</StyledButton>
            )}
          </StyledCustomInputContainer>
        );
      })}
      <StyledButton
        type="button"
        style={{ width: "12rem", backgroundColor: '#499714', color: '#fff', fontWeight: '500' }}
        onClick={addInput}
      >{`Add ${fromCamelToRegular(label)}`}</StyledButton>
    </StyledCustomInputContainer>
  );
};

export default CustomMultipleInputs;
