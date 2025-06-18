import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome() {
    return { message: 'Bem-vindo ao Sistema de Cinema!' };
  }
}
