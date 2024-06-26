import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USERS_MODEL_PROVIDER } from 'src/constants/constants';
import { User } from 'src/interfaces/user.interface';
import { Model } from 'mongoose';
import { hashPassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @Inject(USERS_MODEL_PROVIDER)
    private readonly usersModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = await hashPassword(createUserDto.password);
    const existingUser = await this.usersModel.findOne({email: createUserDto.email});
    if (existingUser) {
      throw new NotFoundException(`Customer with the email ${existingUser.email} already exists!`);
    }else{
      const createdUser = new this.usersModel({...createUserDto, password});
      return await createdUser.save();
    }

  }

  async findAll(): Promise<User[]> {
    return await this.usersModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersModel.findByIdAndUpdate(id).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersModel.findOne
    ({email
    }).exec();
  }



  async delete(id: string): Promise<User> {
    return await this.usersModel.findByIdAndRemove(id);
  }

  async update(id: string, user: User): Promise<User> {
    return await this.usersModel.findByIdAndUpdate(id, user, {new: true});
  }


}
