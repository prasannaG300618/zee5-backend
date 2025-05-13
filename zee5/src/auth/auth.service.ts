import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import AccessToken from 'twilio/lib/jwt/AccessToken';
@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}

    async generateToken(payload){
        console.log(payload)
        return {accessToken: await this.jwtService.signAsync(payload)}
         
    }
}
