import React, { useState } from "react";

import {
  StyledQuantityButton,
  StyledNumberInput,
  StyledQuantityControlWrapper,
} from "./QuantityControl.styled";

interface QuantityControlProps {
  name: string;
  id: string;
  initialQuantity: number;
  addItemQuantity: () => void;
  removeItemQuantity: () => void;
  setItemQuantity: () => void;
}

const QuantityControl = ({
  name,
  id,
  initialQuantity,
  addItemQuantity,
  removeItemQuantity,
  setItemQuantity,
}: QuantityControlProps) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    addItemQuantity();
  };

  const removeQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
    removeItemQuantity();
  };

  const changeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity((prevQuantity) => Number(event.target.value));
  };

  return (
    <StyledQuantityControlWrapper height="20px">
      <StyledQuantityButton onClick={removeQuantity} borderradius="10px">
        -
      </StyledQuantityButton>
      <StyledNumberInput
        type="number"
        id={id}
        name={name}
        min="0"
        max="100"
        value={quantity}
        onChange={changeQuantity}
      />
      <StyledQuantityButton onClick={addQuantity} borderradius="10px">
        +
      </StyledQuantityButton>
    </StyledQuantityControlWrapper>
  );
};

export default QuantityControl;
