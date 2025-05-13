import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Post()
    async existingUser(@Body("Credential") Credential:string|number):Promise<any> {
        console.log(Credential)
        return await this.userService.findUser(Credential)
    }
}
