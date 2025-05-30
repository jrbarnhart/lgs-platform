import { Module } from '@nestjs/common';
import { StoreEventsService } from './store-events.service';
import { StoreEventsController } from './store-events.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StoreEventsController],
  providers: [StoreEventsService, PrismaService],
})
export class StoreEventsModule {}
