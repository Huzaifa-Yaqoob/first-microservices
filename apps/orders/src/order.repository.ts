import { Injectable, Logger } from '@nestjs/common';
import { DatabaseAbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrdersRepository extends DatabaseAbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }
}
