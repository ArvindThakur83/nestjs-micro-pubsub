import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  async save(data: any) {
    await this.userModel.create(data);
    console.log('Saved modified data.');
  }
}
