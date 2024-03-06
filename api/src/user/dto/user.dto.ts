import { IsNotEmpty } from 'class-validator';

export class PostCreateUserDto {
  @IsNotEmpty() email: string;
  @IsNotEmpty() password: string;
  refreshToken: string;
}

export class CreateUserDto {
  @IsNotEmpty() username: string;
  @IsNotEmpty() password: string;
  refreshToken: string;
}

export class UpdateUserDto {
  @IsNotEmpty() username: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() repassword: string;
}

export class LoginUserDto {
  @IsNotEmpty() username: string;
  @IsNotEmpty() password: string;
}
