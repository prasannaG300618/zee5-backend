import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/schema/user.schema';
import { GoogleAuthStrategy} from './register.google.statergy';
@Module({
  providers: [RegisterService, GoogleAuthStrategy],
  imports: [MongooseModule.forFeature([{ name:"user" , schema: userSchema }]) ],
  exports: [RegisterService],
})
export class RegisterModule {}