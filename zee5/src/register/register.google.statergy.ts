import {PassportStrategy } from "@nestjs/passport"
import {Strategy, VerifyCallback } from "passport-google-oauth20"
import { Injectable } from "@nestjs/common"
@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(){
        super({
            clientID:process.env.GoogleClientID,
            clientSecret:process.env.GoogleSecret,
            callbackURL:process.env.GoogleURL,
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