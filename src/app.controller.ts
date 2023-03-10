import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { ItemsService } from './items.service.js';

@Controller()
export class AppController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  @Render('index')
  async home() {
    const items = await this.itemsService.findAll();

    return {
      title: 'NestJS Starter | Architect.io',
      items,
    };
  }

  @Post()
  @Redirect('/')
  async submit(@Body('name') name: string, @Body('rating') rating: number) {
    await this.itemsService.create(name, rating);
  }

  @Post('/delete/:id')
  @Redirect('/')
  async remove(@Param('id') id: number) {
    await this.itemsService.delete(id);
  }
}
