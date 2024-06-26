import { StripeOrder } from "./stripeOrder";

export interface PaymentRequestBody {
    products: StripeOrder[];
    currency: string;
}