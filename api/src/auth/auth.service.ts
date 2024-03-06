import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import * as mongoose from 'mongoose';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async hashData(data: string) {
    return await bcrypt.hash(data, Number(process.env.SALT_OR_ROUNDS));
  }

  async getTokens(userId: mongoose.Types.ObjectId, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          id: userId,
          username,
        },
        {
          secret: process.env.JWT_SECRET_ACCESS_TOKEN,
          expiresIn: '1d',
        },
      ),
      this.jwtService.signAsync(
        {
          id: userId,
          username,
        },
        {
          secret: process.env.JWT_SECRET_REFRESH_TOKEN,
          expiresIn: '7d',
        },
      ),
    ]);
    return {
      accessToken: `Bearer ${accessToken}`,
      refreshToken: `Bearer ${refreshToken}`,
    };
  }
}
