import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { RedisService } from './redis/redis.service';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || "mongodb://mongo:27017/listenerdb"),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  providers: [AppService, RedisService]
})
export class AppModule {}
