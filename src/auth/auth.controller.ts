import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @Post('signin')
  signin(@Body() body: AuthDto) {
    console.log(body);
    return this.authservice.signin(body);
  }

  @Post('signup')
  signup(@Body() body: AuthDto) {
    return this.authservice.signup(body);
  }
}
