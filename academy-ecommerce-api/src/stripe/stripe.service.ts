import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { PaymentRequestBody } from '../interfaces/paymentRequestBody';

@Injectable()
export class PaymentsService {
  private stripe;

  constructor() {
    this.stripe = new Stripe("sk_test_51MRaVIJv052xoepzgzEFVCLvjKJ6h46FXXKfhT4n87L3xhmNlpiiAFT5Gox4eiA6tEfZdXYcJoRHyJFwBshg3AuU00aO5rZNPj", {
      apiVersion: '2022-11-15',
    });
  }

  createPayment(paymentRequestBody: PaymentRequestBody): Promise<any> {
    let sumAmount = 0;
    paymentRequestBody.products.forEach((product) => {
      sumAmount = sumAmount + product.price * product.quantity;
    });
    return this.stripe.paymentIntents.create({
      amount: sumAmount * 100,
      currency: paymentRequestBody.currency,
    });
  }
}