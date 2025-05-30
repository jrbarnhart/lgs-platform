import { Module } from '@nestjs/common';
import { SpecialStoreHoursService } from './special-store-hours.service';
import { SpecialStoreHoursController } from './special-store-hours.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SpecialStoreHoursController],
  providers: [SpecialStoreHoursService, PrismaService],
})
export class SpecialStoreHoursModule {}
