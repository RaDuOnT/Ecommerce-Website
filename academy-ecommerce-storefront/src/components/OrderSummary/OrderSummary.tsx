import { observer } from "mobx-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartStore from "../../api/store/cartStore";
import ApplyDiscount from "../ApplyDiscount/ApplyDiscount";
import {
  CheckoutActions,
  CheckoutButton,
  DiscountsArea,
  OrderSummaryContainer,
  OrderSummaryDetails,
  OrderSummaryHeading,
  OrderSummaryProductsNumber,
  OrderSummaryText,
  OrderSummaryTotal,
  SummaryRow,
} from "./OrderSummary.styled";

interface OrderSummaryProps {
  fullPrice: number;
  discounts: number;
  shippingFee: number;
}

const OrderSummary = observer(
  ({ fullPrice, discounts, shippingFee }: OrderSummaryProps) => {
    const [totalPrice, setTotalPrice] = useState<number>(
      fullPrice - discounts + shippingFee
    );

    const addNewDiscount = () => {
      console.log("added a new discount");
    };
    return (
      <OrderSummaryContainer>
        <OrderSummaryHeading>Rezumatul comenzii</OrderSummaryHeading>
        <OrderSummaryDetails>
          <SummaryRow>
            <OrderSummaryText>Preț complet</OrderSummaryText>

            <OrderSummaryProductsNumber>{`${cartStore.cart.total} RON`}</OrderSummaryProductsNumber>
          </SummaryRow>
          <SummaryRow>
            <OrderSummaryText>Reduceri din oferte/cupoane</OrderSummaryText>
            <OrderSummaryProductsNumber>{`${discounts} RON`}</OrderSummaryProductsNumber>
          </SummaryRow>

          <SummaryRow>
            <OrderSummaryText>Transport</OrderSummaryText>
            <OrderSummaryProductsNumber>
              {Number(shippingFee) === 0 ? "Gratis" : `${shippingFee} RON`}
            </OrderSummaryProductsNumber>
          </SummaryRow>
          <SummaryRow>
            <OrderSummaryText>Prețul final</OrderSummaryText>
            <OrderSummaryTotal>{`${cartStore.cart.total} RON`}</OrderSummaryTotal>
          </SummaryRow>
          <SummaryRow></SummaryRow>
        </OrderSummaryDetails>
        <CheckoutActions>
          <Link to="/trimite-comanda">
            <CheckoutButton>Completează datele</CheckoutButton>
          </Link>
        </CheckoutActions>
        <DiscountsArea>
          <ApplyDiscount setDiscount={addNewDiscount} />
        </DiscountsArea>
      </OrderSummaryContainer>
    );
  }
);

export default OrderSummary;
