import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { DatabaseAbstractSchema } from '@app/common';

@Schema({ versionKey: false })
export class Order extends DatabaseAbstractSchema {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  phoneNumber: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
