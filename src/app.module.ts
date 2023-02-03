import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
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
