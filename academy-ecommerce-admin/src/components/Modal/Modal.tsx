import { action } from "mobx";
import React, { useEffect, useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomMultipleInputs from "../CustomMultipleInputs/CustomMultipleInputs";
import {
  StyledActionsArea,
  StyledButton,
  StyledExitButton,
  StyledForm,
  StyledFormTitle,
  StyledModalContainer,
  StyledModalOverlay,
} from "./Modal.styled";

interface InputItem {
  label: string;
  name: string;
  type: string;
  value?: string | number | null | string[];
}
interface InputItemsList extends Array<InputItem> {}

interface ActionButtonItem {
  text: string;
  onclick: any;
  type?: string;
}

interface ActionButtonsList extends Array<ActionButtonItem> {}

interface ModalProps {
  inputs: InputItemsList;
  actions?: ActionButtonItem;
  show: boolean;
  showFunction?: any;
  title: string;
  initialState?: object;
}

const Modal = ({
  inputs,
  actions,
  show,
  showFunction,
  title,
  initialState,
}: ModalProps) => {
  const [formState, setFormState] = useState<any>({});

  const hideModal = () => {
    showFunction(false);
  };

  useEffect(() => {
    if (initialState) {
      setFormState(initialState);
    }
  }, []);

  // this function changes the form states to be an array of objects of type name: string, value: string
  const changeFormState = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const formDataCopy: any = { ...formState };
    formDataCopy[e.target.name] = e.target.value;
    setFormState(formDataCopy);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted", formState);
  };

  const changeFormStateMultiple = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    name: string
  ) => {
    const formDataCopy: any = { ...formState };
    formDataCopy[name][index] = e.target.value;
    setFormState(formDataCopy);
  };

  const deleteMultipleInputHandler = (name: string, index: number) => {
    const formDataCopy: any = { ...formState };
    formDataCopy[name] = formState[name].filter(
      (item: any, idx: number) => idx !== index
    );
    setFormState(formDataCopy);
  };

  return (
    <>
      {show && (
        <StyledModalOverlay onClick={hideModal}>
          <StyledModalContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <StyledFormTitle>{title}</StyledFormTitle>
            <StyledForm onSubmit={submitHandler}>
              {inputs.map((item, index) => {
                if (
                  item.label === "_id" ||
                  item.label === "__v" ||
                  item.label === "password"
                ) {
                  return;
                }
                if (item.type === "multiple") {
                  return (
                    <CustomMultipleInputs
                      label={item.label}
                      key={index}
                      onChange={changeFormStateMultiple}
                      name={item.name}
                      value={item.value}
                      onDelete={deleteMultipleInputHandler}
                    />
                  );
                }
                return (
                  <CustomInput
                    key={index}
                    name={item.name}
                    label={item.label}
                    onChange={(event) => {
                      changeFormState(event);
                    }}
                    type={item.type}
                    value={item.value}
                  />
                );
              })}

              <StyledActionsArea>
                {actions && (
                  <StyledButton
                    type="submit"
                    style={{color: '#fff', backgroundColor: '#6100d4'}}
                    onClick={() => {
                      actions.onclick(formState);
                    }}
                  >
                    {actions.text}
                  </StyledButton>
                )}

                <StyledButton type="button" style={{color: '#fff', backgroundColor: '#091322'}}>Cancel</StyledButton>
              </StyledActionsArea>
            </StyledForm>

            <StyledExitButton onClick={hideModal}>X</StyledExitButton>
          </StyledModalContainer>
        </StyledModalOverlay>
      )}
    </>
  );
};

export default Modal;
