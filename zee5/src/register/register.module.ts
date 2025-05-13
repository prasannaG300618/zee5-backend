import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.schema';
import { GoogleAuthStrategy} from './register.google.statergy';
import { RegisterController } from './register.controller';
@Module({
  providers: [RegisterService, GoogleAuthStrategy],
  imports: [MongooseModule.forFeature([{ name:"user" , schema: UserSchema }])],
  controllers:[RegisterController],
  exports: [RegisterService],
})
export class RegisterModule {}