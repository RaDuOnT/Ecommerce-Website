import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { usersProvider } from './users.provider';
@Module({
  exports:[UsersService],
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProvider]
})
export class UsersModule {}
