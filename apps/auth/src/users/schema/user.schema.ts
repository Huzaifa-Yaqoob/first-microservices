import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DatabaseAbstractSchema } from '@app/common';

@Schema({ versionKey: false })
export class User extends DatabaseAbstractSchema {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
