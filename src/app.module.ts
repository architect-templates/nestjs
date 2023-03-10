import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { Item } from './item.entity.js';
import { ItemsService } from './items.service.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Item]),
  ],
  controllers: [AppController],
  providers: [ItemsService],
})
export class AppModule {}
