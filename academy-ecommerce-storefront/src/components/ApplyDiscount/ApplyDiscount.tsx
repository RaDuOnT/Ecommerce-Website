import React, { useState } from "react";
import {
  ApplyDiscountContainer,
  StyledClassicButton,
  StyledInput,
} from "./ApplyDiscount.styled";

interface ApplyDiscountProps {
  setDiscount: () => void;
}

const ApplyDiscount = ({ setDiscount }: ApplyDiscountProps) => {
  const [discountCode, setDiscountCode] = useState<string>();

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setDiscountCode((e.target as HTMLInputElement).value);

    // console.log((e.target as HTMLInputElement).value);
  };
  // console.log(discountCode);

  return (
    <ApplyDiscountContainer>
      <StyledInput onChange={onChangeHandler} placeholder="Cod cupon" />
      <StyledClassicButton onClick={setDiscount}>
        Aplică discount
      </StyledClassicButton>
    </ApplyDiscountContainer>
  );
};

export default ApplyDiscount;
