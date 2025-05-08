import { Document } from "mongodb";

export interface registerDto extends Document{
     name:string;
     age :number;
     gender :string;
     phoneNumber :number;
     email?:string;
     otp? :string;
     verified?:boolean;
}
