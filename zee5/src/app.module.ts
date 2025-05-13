import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './register/register.controller';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterService } from './register/register.service';
import { OtpController } from './otp/otp.controller';
import { OtpModule } from './otp/otp.module';
import { OtpService } from './otp/otp.service';
import { OtpTwilioController } from './otp-twilio/otp-twilio.controller';
import { OtpTwilioModule } from './otp-twilio/otp-twilio.module';
import { OtpTwilioService } from './otp-twilio/otp-twilio.service';
import { GoogleAuthStrategy } from './register/register.google.statergy';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:".env"
  }),MongooseModule.forRoot('mongodb://localhost:27017/zee5'),RegisterModule, OtpModule,  UserModule, AuthModule, JwtModule],
  controllers: [AppController, RegisterController,OtpController, OtpTwilioController],
  providers: [AppService, OtpTwilioService, GoogleAuthStrategy, AuthService],
})
export class AppModule {}
