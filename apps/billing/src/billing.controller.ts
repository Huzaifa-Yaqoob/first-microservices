import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @MessagePattern('create-order')
  async handleOrderCreated(@Payload() order: any, rmqContext: RmqContext) {
    console.log('in billing service');
    await this.billingService.handleOrderCreated(order);
  }
}
