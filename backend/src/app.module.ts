import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DB_ADDR,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ItemsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
