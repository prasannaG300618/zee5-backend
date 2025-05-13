import { MiddlewareConsumer, Module , RequestMethod} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constrants';
import { OtpTwilioService } from 'src/otp-twilio/otp-twilio.service';
import { OtpModule } from 'src/otp/otp.module';
import { OtpService } from 'src/otp/otp.service';
import { NestModule } from '@nestjs/common';
import { authMiddleware } from './middleware/auth.middleware';
@Module({
  controllers: [AuthController],
  imports:[
    JwtModule.register({
     secret:jwtConstants.secret,
      signOptions:{expiresIn:"2d"}
    }), OtpModule
  ],
  providers: [AuthService, OtpTwilioService, ],
  exports: [AuthService]
})
export class AuthModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer .apply(authMiddleware) .forRoutes({ path: 'auth/validate', method: RequestMethod.GET })
  }
}
