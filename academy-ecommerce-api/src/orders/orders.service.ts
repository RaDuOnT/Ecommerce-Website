import { Injectable, Inject } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ORDERS_MODEL_PROVIDER } from '../constants/constants';
import { Order } from '../interfaces/orders.interface';
// import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDERS_MODEL_PROVIDER)
    private readonly ordersModel: Model<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.ordersModel(createOrderDto);
    return await createdOrder.save();
  }

  async findAll(userId: string): Promise<Order[]> {
    if (userId) {
      return await this.ordersModel.find().where('userId').equals(userId).exec();
    } else {
    return await this.ordersModel.find().exec();
    }
  }

  async findOne(id: string): Promise<Order> {
    return await this.ordersModel.findById(id).exec();
  }

  async update(id: string, Order: Order): Promise<Order> {
    return await this.ordersModel.findByIdAndUpdate(id, Order, {
      new: true,
    });
  }

  async delete(id: string): Promise<Order> {
    return await this.ordersModel.findByIdAndRemove(id);
  }
}
