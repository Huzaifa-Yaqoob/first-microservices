import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './helper/validate.env';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, validate })],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
