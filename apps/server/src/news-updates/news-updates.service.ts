import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNewsUpdateDto, UpdateNewsUpdateDto } from 'lgs-zod-dto';
import prismaError from 'src/validation/prismaError';

@Injectable()
export class NewsUpdatesService {
  constructor(private prisma: PrismaService) {}

  async create(createNewsUpdateDto: CreateNewsUpdateDto) {
    try {
      return await this.prisma.newsUpdate.create({ data: createNewsUpdateDto });
    } catch (error) {
      prismaError(error);
    }
  }

  async findAll() {
    return this.prisma.newsUpdate.findMany();
  }

  async findOne(id: number) {
    const foundRecord = await this.prisma.newsUpdate.findUnique({
      where: { id },
    });

    if (!foundRecord) {
      throw new NotFoundException('Record not found');
    }

    return foundRecord;
  }

  async update(id: number, updateNewsUpdateDto: UpdateNewsUpdateDto) {
    try {
      return await this.prisma.newsUpdate.update({
        where: { id },
        data: updateNewsUpdateDto,
      });
    } catch (error) {
      prismaError(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.newsUpdate.delete({ where: { id } });
    } catch (error) {
      prismaError(error);
    }
  }
}
