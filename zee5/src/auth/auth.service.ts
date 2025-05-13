import { JwtService } from '@nestjs/jwt';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { jwtConstants } from './constrants';
export enum Provider
    {
        GOOGLE = 'google'
    }
@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}
    private readonly JWT_SECRET_KEY = jwtConstants.secret;
    async generateToken(payload){
        console.log(payload)
        return {"accessToken": await this.jwtService.signAsync(payload)}
         
    }

    async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>
    {
        try 
        {       
            const payload = {
                thirdPartyId,
                provider
            }

            const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
            return jwt;
        }
        catch (err)
        {
            throw new InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }
}
