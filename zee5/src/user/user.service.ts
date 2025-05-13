import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
    constructor(@InjectModel("user") private userModel: Model<any>) {}
    async findUser(credential:string){
        let number = parseInt(credential)
        console.log(number)
        let value:any
        if(number){
            console.log("Number")
           value = await this.userModel.findOne({phoneNumber:credential}).exec()
        }else{
            console.log("Email")
            value = await this.userModel.findOne({email:credential}).exec()
        }
        // let value = await this.userModel.findOne({$or:[ { phoneNumber:credential as number },{ email: credential as string}] }).exec()   
        console.log(value)
        if(!value){
            return false
        }else{
            return true
        }
        }
}
