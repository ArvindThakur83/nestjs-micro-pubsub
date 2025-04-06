import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit {
  private client;

  async onModuleInit() {
    this.client = createClient({ url: `redis://${process.env.REDIS_HOST}:6379` });
    await this.client.connect();
  }

  async publish(channel: string, message: string) {
    await this.client.publish(channel, message);
  }
}
