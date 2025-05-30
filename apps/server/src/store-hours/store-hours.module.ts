import { Module } from '@nestjs/common';
import { StoreHoursService } from './store-hours.service';
import { StoreHoursController } from './store-hours.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StoreHoursController],
  providers: [StoreHoursService, PrismaService],
})
export class StoreHoursModule {}
