import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OffersController],
  providers: [OffersService, PrismaService],
})
export class OffersModule {}
