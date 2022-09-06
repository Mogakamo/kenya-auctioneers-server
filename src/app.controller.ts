import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return req.user;
  }
}
