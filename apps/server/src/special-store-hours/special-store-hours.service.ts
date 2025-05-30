import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateSpecialStoreHourDto,
  UpdateSpecialStoreHourDto,
} from 'lgs-zod-dto';
import { PrismaService } from 'src/prisma.service';
import prismaError from 'src/validation/prismaError';

@Injectable()
export class SpecialStoreHoursService {
  constructor(private prisma: PrismaService) {}

  async create(createSpecialStoreHourDto: CreateSpecialStoreHourDto) {
    try {
      return await this.prisma.specialStoreHour.create({
        data: createSpecialStoreHourDto,
      });
    } catch (error) {
      prismaError(error);
    }
  }

  async findAll() {
    return await this.prisma.specialStoreHour.findMany();
  }

  async findOne(id: number) {
    const foundRecord = await this.prisma.specialStoreHour.findUnique({
      where: { id },
    });

    if (!foundRecord) {
      throw new NotFoundException('Record not found');
    }

    return foundRecord;
  }

  async update(
    id: number,
    updateSpecialStoreHourDto: UpdateSpecialStoreHourDto,
  ) {
    try {
      return await this.prisma.specialStoreHour.update({
        where: { id },
        data: updateSpecialStoreHourDto,
      });
    } catch (error) {
      prismaError(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.specialStoreHour.delete({ where: { id } });
    } catch (error) {
      prismaError(error);
    }
  }
}
