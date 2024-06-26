import { Module } from '@nestjs/common';
import { PaymentsController } from './stripe.controller';
import { PaymentsService } from './stripe.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}