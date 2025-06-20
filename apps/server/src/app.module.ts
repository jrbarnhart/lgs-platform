import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NewsUpdatesModule } from './news-updates/news-updates.module';
import { StoreHoursModule } from './store-hours/store-hours.module';
import { SpecialStoreHoursModule } from './special-store-hours/special-store-hours.module';
import { StoreEventsModule } from './store-events/store-events.module';
import { OffersModule } from './offers/offers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NewsUpdatesModule, StoreHoursModule, SpecialStoreHoursModule, StoreEventsModule, OffersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
