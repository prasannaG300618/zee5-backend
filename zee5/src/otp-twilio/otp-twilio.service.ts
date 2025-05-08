import { Injectable } from '@nestjs/common';
import twilio from "twilio"
@Injectable()
export class OtpTwilioService {
    accountSid = '';
    authToken = '';
    client = require('twilio')(this.accountSid, this.authToken);

    createOtp(number:number){
        this.client.verify.v2.services("")
      .verifications
      .create({to: `+91${number}`, channel: 'sms'})
      .then(verification => console.log(verification.sid));
    }

    validOtp(code:string, number:number){
        this.client.verify.v2.services("VA8dd1605a73158b282379cb117729049d")
      .verificationChecks
      .create({to: `+91${number}`, code: code})
      .then(verification_check => console.log(verification_check.status));
    }

    

}
// VA8dd1605a73158b282379cb117729049d