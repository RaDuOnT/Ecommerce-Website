import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ordersProvider } from './orders.provider';
import { DatabaseModule } from '../database/database.module';
// import { Orders } from './orders';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [OrdersService, 
    ...ordersProvider
  ]
})
export class OrdersModule {}
