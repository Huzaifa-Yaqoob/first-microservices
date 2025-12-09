import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() order: CreateOrderRequest) {
    return this.ordersService.createOrder(order);
  }

  @Get()
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }
}
