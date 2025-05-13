import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { OtpTwilioService } from 'src/otp-twilio/otp-twilio.service';
import { otp } from 'src/register/dto/otp.dto';
import { OtpService } from 'src/otp/otp.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService, private otptwilioService:OtpTwilioService, private otpService:OtpService){}

    @Post('Mobile-verification')
   async generateToken(@Body() data:otp){
        console.log(data)
        let otpValid = await this.otptwilioService.validOtp(data.otp,data.phoneNumber)
        console.log(otpValid)

        if(otpValid){
           return this.authService.generateToken(data)
        }else{
            console.log("OTP is invalid")
            return {accessToken:"OTP is in Valid"}
        }
    }

    @Post("Email-Verification")
    async GenerateTokenEmail(@Body() data:{email:string, code:number}){
        let email  =await  this.otpService.isValidate(data.email, data.code)
        console.log(email)
        if(email === "verified"){
           return this.authService.generateToken(data)
           
        }else{
            return email
        }
    }

    //verification
    @Get("validate")
    validateJWT(){
        return ("User Token Verified")
    }

    @Get()
    display(){
        console.log(process.env.local)
    }


}
