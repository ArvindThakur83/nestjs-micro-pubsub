import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { AppService } from './app.service';

@Controller('receiver')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async handle(@Body() userDto: UserDto) {
    return this.appService.process(userDto);
  }
}
