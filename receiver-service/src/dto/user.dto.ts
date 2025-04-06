import { IsEmail, IsInt, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  user: string;

  @IsString()
  class: string;

  @IsInt()
  age: number;

  @IsEmail()
  email: string;
}
