import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'lgs-zod-dto';

@Injectable()
export class AuthService {
  async signIn(loginDto: LoginDto) {
    const { password, username } = loginDto;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH || 'notAHash';
    const passwordMatches = await bcrypt.compare(password, adminPasswordHash);

    if (username !== process.env.ADMIN_USERNAME || !passwordMatches) {
      throw new UnauthorizedException();
    }

    return 'Authorized!';
  }
}
