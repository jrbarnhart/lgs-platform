import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStoreHourDto, UpdateStoreHourDto } from 'lgs-zod-dto';
import { PrismaService } from 'src/prisma.service';
import prismaError from 'src/validation/prismaError';

@Injectable()
export class StoreHoursService {
  constructor(private prisma: PrismaService) {}

  async create(createStoreHourDto: CreateStoreHourDto) {
    try {
      return await this.prisma.storeHour.create({ data: createStoreHourDto });
    } catch (error) {
      prismaError(error);
    }
  }

  async findAll() {
    return await this.prisma.storeHour.findMany();
  }

  async findOne(id: number) {
    const foundRecord = await this.prisma.storeHour.findUnique({
      where: { id },
    });

    if (!foundRecord) {
      throw new NotFoundException('Record not found');
    }

    return foundRecord;
  }

  async update(id: number, updateStoreHourDto: UpdateStoreHourDto) {
    try {
      return await this.prisma.storeHour.update({
        where: { id },
        data: updateStoreHourDto,
      });
    } catch (error) {
      prismaError(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.storeHour.delete({ where: { id } });
    } catch (error) {
      prismaError(error);
    }
  }
}
