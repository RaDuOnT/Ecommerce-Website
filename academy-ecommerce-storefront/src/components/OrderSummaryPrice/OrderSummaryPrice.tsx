import React, { useEffect, useState } from "react";
import cartStore from "../../api/store/cartStore";
import {
  OrderSummaryPriceRow,
  PriceContainer,
  PriceText,
} from "./OrderSummaryPrice.styled";

const OrderSummaryPrice = () => {
  const [total, setTotal] = useState<number>(1333);

  useEffect(() => {
    cartStore.getProducts("63c5104d49f660c7a356dd11");
  }, []);

  return (
    <PriceContainer>
      <OrderSummaryPriceRow>
        <PriceText color="#2f4858">Total inainte de reduceri:</PriceText>
        <PriceText fontweight="bold" color="#2f4858">
          {`${cartStore.cart.total ?? 0} RON`}
        </PriceText>
      </OrderSummaryPriceRow>
      <OrderSummaryPriceRow>
        <PriceText color="#2f4858">Reduceri:</PriceText>
        <PriceText fontweight="bold" color="#2f4858">
          0 RON
        </PriceText>
      </OrderSummaryPriceRow>
      <OrderSummaryPriceRow>
        <PriceText color="#2f4858">Transport:</PriceText>
        <PriceText fontweight="bold" color="#2f4858">
          Gratis
        </PriceText>
      </OrderSummaryPriceRow>
      <OrderSummaryPriceRow style={{ borderTop: "1px solid #e8e8e8" }}>
        <PriceText fontweight="bold" fontsize="18px" color="#2f4858">
          Total:
        </PriceText>
        <PriceText fontsize="18px" fontweight="bold" color="#ffbf33">
          {`${cartStore.cart.total ?? 0} RON`}
        </PriceText>
      </OrderSummaryPriceRow>
    </PriceContainer>
  );
};

export default OrderSummaryPrice;
