import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NewsUpdatesModule } from './news-updates/news-updates.module';
import { StoreHoursModule } from './store-hours/store-hours.module';
import { SpecialStoreHoursModule } from './special-store-hours/special-store-hours.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NewsUpdatesModule, StoreHoursModule, SpecialStoreHoursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
