import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtEntity, LoginDto } from 'lgs-zod-dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(loginDto: LoginDto): Promise<JwtEntity> {
    const { password, username } = loginDto;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
    const adminUsername = process.env.ADMIN_USERNAME;

    if (!adminPasswordHash || !adminUsername) {
      throw new InternalServerErrorException(
        'Server has not been configured for auth',
      );
    }

    const passwordMatches = await bcrypt.compare(password, adminPasswordHash);

    if (username !== adminUsername || !passwordMatches) {
      throw new UnauthorizedException();
    }

    const payload = { sub: 1, username: adminUsername };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
