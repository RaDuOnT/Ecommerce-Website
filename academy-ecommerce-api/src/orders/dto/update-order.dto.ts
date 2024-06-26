import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  userId: string;
  itemId: string;
  date: Date;
  quantity: number;
  price: number;
  status: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  zipcode: string;
  city: string;
  country: string;
  items: [];
}
