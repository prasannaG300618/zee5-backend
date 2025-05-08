import mongoose   from "mongoose";

export const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phoneNumber: Number,
    gender:String,
    email:{
    Type:String
    },
    otp:{type:Number},
    verified:{type:Boolean},

  });