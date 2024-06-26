import styled from "styled-components";

export const PriceContainer = styled.div`
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`;

export const OrderSummaryPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface TextProps {
  fontweight?: string;
  fontsize?: string;
  color?: string;
}
export const PriceText = styled.p<TextProps>`
  font-weight: ${(props) => props.fontweight};
  font-size: ${(props) => props.fontsize};
  color: ${(props) => props.color};
`;
