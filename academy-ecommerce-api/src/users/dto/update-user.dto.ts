import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    _id: string;
    email: string;
    password: string;
    phoneNumber: string;
}
