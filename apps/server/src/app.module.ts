import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NewsUpdatesModule } from './news-updates/news-updates.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NewsUpdatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
