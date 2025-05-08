import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
    constructor(@InjectModel("user") private userModel: Model<any>) {}
    async findUser(credential:string|number){
        console.log(credential)
        let value:any
        if(typeof credential === "number"){
           value = await this.userModel.findOne({phoneNumber:credential}).exec()
        }else if(typeof credential == "string"){
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
