import { Module } from '@nestjs/common';
import { NewsUpdatesService } from './news-updates.service';
import { NewsUpdatesController } from './news-updates.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NewsUpdatesController],
  providers: [NewsUpdatesService, PrismaService],
})
export class NewsUpdatesModule {}
