import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
// import { CatsModule } from './cats/cats.module';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CartModule } from './cart/cart.module';
import { CatsModule } from './cats/cats.module';
import { PaymentsModule } from './stripe/stripe.module';
@Module({
  imports: [
    ProductsModule,
    UsersModule,
    AuthModule,
    OrdersModule,
    ReviewsModule,
    CartModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
