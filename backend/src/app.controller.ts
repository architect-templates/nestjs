import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Redirect('/items')
  index() {
    return {};
  }
}
