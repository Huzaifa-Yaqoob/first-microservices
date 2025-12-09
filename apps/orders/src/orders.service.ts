import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './order.repository';
import { CreateOrderRequest } from './dto/create-order.request';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  async createOrder(order: CreateOrderRequest) {
    return await this.orderRepository.create(order);
  }

  async getAllOrders() {
    return await this.orderRepository.find({});
  }
}
