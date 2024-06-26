import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
    userId: string;
    productId: string;
    rating: string;
    message: string;
    createdAt: string;
}
