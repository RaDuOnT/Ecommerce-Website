import { Injectable, Inject } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { REVIEWS_MODEL_PROVIDER } from '../constants/constants';
import { Review } from '../interfaces/review.interface';
import { Model } from 'mongoose';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject(REVIEWS_MODEL_PROVIDER)
    private readonly reviewsModel: Model<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const createdReview = new this.reviewsModel(createReviewDto);
    return await createdReview.save();
  }

  async findAll(productId?: string): Promise<Review[]> {
    if (productId){
      return await this.reviewsModel.find().where('productId').equals(productId)
    }
    return await this.reviewsModel.find().exec();
  }

  async findOne(id: string): Promise<Review> {
    return await this.reviewsModel.findById(id).exec();
  }

  async update(id: string, review: Review): Promise<Review> {
    return await this.reviewsModel.findByIdAndUpdate(id, review, {new: true})
  }

  async delete(id: string): Promise<Review> {
    return await this.reviewsModel.findByIdAndRemove(id);
  }
}