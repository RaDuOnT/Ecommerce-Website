import { Injectable, Inject } from '@nestjs/common';
import { CART_MODEL_PROVIDER } from 'src/constants/constants';
import { Cart } from 'src/interfaces/cart.interface';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Model } from 'mongoose';

@Injectable()
export class CartService {
  constructor(
    @Inject(CART_MODEL_PROVIDER)
    private readonly cartModel: Model<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const createdCart = new this.cartModel(createCartDto);
    return await createdCart.save();
  }

  async findAll(): Promise<Cart[]> {
    return await this.cartModel.find().exec();
  }

  async findOne(id: string): Promise<Cart> {
    return await this.cartModel.findById(id).exec();
  }

  async update(id: string, cart: Cart): Promise<Cart> {
    return await this.cartModel.findByIdAndUpdate(id, cart, {
      new: true,
    });
  }
  async updateCartItems(userId: string, cart: Cart): Promise<Cart> {
    const existingCart = await this.cartModel.findOne({ userId });
    existingCart.items = cart.items;
    existingCart.total = cart.total;
    await existingCart.save();
    return existingCart;
  }

  async findByUserid(userId: string): Promise<Cart> {
    let query = this.cartModel.findOne({ userId: userId });
    return await query.exec();
  }

  async remove(id: string): Promise<Cart> {
    return await this.cartModel.findByIdAndRemove(id);
  }
}
