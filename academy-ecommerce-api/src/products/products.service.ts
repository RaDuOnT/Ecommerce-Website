import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PRODUCTS_MODEL_PROVIDER } from '../constants/constants';
import { Product } from '../interfaces/product.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_MODEL_PROVIDER)
    private readonly productsModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productsModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(limit?: number, gender?: string): Promise<Product[]> {
    let query = this.productsModel.find();
  
    if (limit) {
      query = query.limit(limit);
    }
  
    if (gender) {
      query = query.where('category').equals(gender);
    }
  
    return await query.exec();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productsModel.findById(id).exec();
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productsModel.findByIdAndUpdate(id, product, {new: true})
  }

  async delete(id: string): Promise<Product> {
    return await this.productsModel.findByIdAndRemove(id);
  }
}
