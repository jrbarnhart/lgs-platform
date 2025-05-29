import { Injectable } from '@nestjs/common';
import { CreateNewsUpdateDto } from './dto/create-news-update.dto';
import { UpdateNewsUpdateDto } from './dto/update-news-update.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NewsUpdatesService {
  constructor(private prisma: PrismaService) {}

  create(createNewsUpdateDto: CreateNewsUpdateDto) {
    return 'This action adds a new newsUpdate';
  }

  async findAll() {
    const updateCount = await this.prisma.newsUpdate.count();
    return `This action returns all newsUpdates. Total: ${updateCount}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsUpdate`;
  }

  update(id: number, updateNewsUpdateDto: UpdateNewsUpdateDto) {
    return `This action updates a #${id} newsUpdate`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsUpdate`;
  }
}
