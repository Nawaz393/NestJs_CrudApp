import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async editUser(userid: number, userdto: EditUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: userid,
        },
        data: {
          ...userdto,
        },
      });

      if (user) {
        delete user.hash;
        return user;
      } else {
        throw new InternalServerErrorException('error  in updating');
      }
    } catch (error) {
      throw error;
    }
  }

  async editPassword(userid: number, password: string) {
    try {
      const hash = await argon.hash(password);

      const updated = await this.prisma.user.update({
        where: {
          id: userid,
        },
        data: {
          hash,
        },
      });

      if (updated) {
        return {
          message: 'password updated successfully',
        };
      }
    } catch (error) {
      throw error;
    }

    return new ForbiddenException('error in password change');
  }
}
