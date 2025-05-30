import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNewsUpdateDto, UpdateNewsUpdateDto } from 'lgs-zod-dto';

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
