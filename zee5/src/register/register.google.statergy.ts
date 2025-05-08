import {PassportStrategy } from "@nestjs/passport"
import {Strategy, VerifyCallback } from "passport-google-oauth20"
import { Injectable } from "@nestjs/common"
import userEvent from "@testing-library/user-event"

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID:'',
            clientSecret:'',
            callbackURL:"http://localhost:3000/auth/google/callback",
            scope:["email"]
        })
    }

    async validate(accessToken:string, refreshToken:string, profile:any, done:VerifyCallback):Promise<any>{
        let user={
            name:profile
        }
        done(null,user)
    }
}