import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Cat } from '../interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { CATS_MODEL_PROVIDER } from '../constants/constants';

@Injectable()
export class CatsService {

    constructor(
        @Inject(CATS_MODEL_PROVIDER) private readonly catsModel: Model<Cat>) { }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catsModel(createCatDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catsModel.find().exec();
    }

    async findOne(id: string): Promise<Cat> {
        return await this.catsModel.findById(id).exec();
    }

    async update(id: string, cat: Cat): Promise<Cat> {
        return await this.catsModel.findByIdAndUpdate
            (id, cat, { new: true });
    }
    async delete(id: string): Promise<Cat> {
        return await this.catsModel.findByIdAndRemove(id);
    }
}
