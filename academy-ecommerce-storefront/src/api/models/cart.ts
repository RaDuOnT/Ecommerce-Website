import { ProductInt } from './product';

export interface CartInt {
  userId: string;
  items: ProductInt[];
  productID: string;
}
