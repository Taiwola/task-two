import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDoc = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop({ required: true }) name: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
