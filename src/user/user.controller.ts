import {
  Body,
  Controller,
  Get,
  HttpCode,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/decorator';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(JwtGuard)
export class UserController {
  constructor(private userservice: UserService) {}
  @Get('me')
  getMe(@GetUser('id') id: number) {
    return id;
  }
  @HttpCode(200)
  @Patch('edit')
  editUser(@GetUser('id') id: number, @Body() userdto: EditUserDto) {
    console.log(userdto);
    console.log(id);
    return this.userservice.editUser(id, userdto);
  }

  @HttpCode(200)
  @Patch('editpass')
  editPassword(@GetUser('id') id: number, @Body('password') password: string) {
    return this.userservice.editPassword(id, password);
  }
}
