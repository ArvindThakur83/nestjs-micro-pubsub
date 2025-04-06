import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { RedisService } from './redis/redis.service';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('User') private userModel: Model<any>,
    private redisService: RedisService
  ) {}

  async process(data: any) {
    const payload = {
      id: uuidv4(),
      ...data,
      inserted_at: new Date()
    };

    await this.userModel.create(payload);
    await this.redisService.publish('user-events', JSON.stringify(payload));
    return { message: 'Data received and published.' };
  }
}
