import mongoose   from "mongoose";
import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document,Types } from "mongoose";
import { Post } from "@nestjs/common";
export type user = userSchema & Document<Types.ObjectId>;
@Schema()
export  class userSchema{
    @Prop()
    age: Number;
    @Prop({required:false})
    phoneNumber: Number
    @Prop({required:false})
    gender:String
    @Prop({default:"Email not given"})
    email:string
    @Prop({required:false})
    otp:Number
    @Prop({required:false})
    verified:Boolean
  }

  export const UserSchema = SchemaFactory.createForClass(userSchema)

