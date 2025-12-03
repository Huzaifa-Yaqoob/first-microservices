import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema({ timestamps: true })
export class DatabaseAbstractSchema {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  createdAt: Date;

  updatedAt: Date;
}
