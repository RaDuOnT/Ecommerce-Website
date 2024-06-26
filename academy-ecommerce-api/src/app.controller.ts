import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService: AuthService
    ) {}

  // Post /login
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    const access_token = await this.authService.login(req.user);
    return {...access_token, ...req.user};
  }
}
