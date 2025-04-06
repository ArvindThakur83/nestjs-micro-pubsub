import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient } from 'redis';
import { AppService } from '../app.service';

@Injectable()
export class RedisService implements OnModuleInit {
  private subscriber;

  constructor(private appService: AppService) {}

  async onModuleInit() {
    this.subscriber = createClient({ url: `redis://${process.env.REDIS_HOST}:6379` });
    await this.subscriber.connect();

    await this.subscriber.subscribe('user-events', async (message) => {
      const parsed = JSON.parse(message);
      parsed.modified_at = new Date();
      await this.appService.save(parsed);
    });
  }
}
