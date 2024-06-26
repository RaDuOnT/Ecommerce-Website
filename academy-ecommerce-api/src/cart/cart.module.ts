import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cartProvider } from './cart.provider';
@Module({
  imports: [DatabaseModule],
  controllers: [CartController],
  providers: [CartService, ...cartProvider],
})
export class CartModule {}
