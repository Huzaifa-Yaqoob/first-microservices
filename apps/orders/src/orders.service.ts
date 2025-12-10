import { Inject, Injectable } from '@nestjs/common';
import { OrdersRepository } from './order.repository';
import { CreateOrderRequest } from './dto/create-order.request';
import { BILLING_SERVICE } from './helper/constant';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(
    private readonly orderRepository: OrdersRepository,
    @Inject(BILLING_SERVICE) private readonly billingClient: ClientProxy,
  ) {}

  async createOrder(order: CreateOrderRequest) {
    console.log('in order service');
    const session = await this.orderRepository.startTransaction();
    try {
      const createdOrder = await this.orderRepository.create(order, {
        session,
      });
      this.billingClient.emit('create-order', createdOrder);
      await session.commitTransaction();
      return createdOrder;
    } catch (e) {
      await session.abortTransaction();
      throw e;
    }
  }

  async getAllOrders() {
    return await this.orderRepository.find({});
  }
}
