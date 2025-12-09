import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './helper/validate.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: './apps/billing/.env',
    }),
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
