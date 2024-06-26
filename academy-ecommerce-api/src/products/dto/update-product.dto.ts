import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    quantity: number;
    manufacturer: string;
    category: string;
    type: string;
    topNotes: string;
    heartNotes: string;
    baseNotes: string;
    perfumeGroup: string;
}
