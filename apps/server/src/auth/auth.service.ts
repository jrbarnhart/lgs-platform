import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async signIn({ username, password }: { username: string; password: string }) {
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH || 'notAHash';
    const passwordMatches = await bcrypt.compare(password, adminPasswordHash);

    if (username !== process.env.ADMIN_USERNAME || !passwordMatches) {
      throw new UnauthorizedException();
    }

    return 'Authorized!';
  }
}
