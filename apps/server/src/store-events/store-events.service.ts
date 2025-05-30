import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStoreEventDto, UpdateStoreEventDto } from 'lgs-zod-dto';
import { PrismaService } from 'src/prisma.service';
import prismaError from 'src/validation/prismaError';

@Injectable()
export class StoreEventsService {
  constructor(private prisma: PrismaService) {}

  async create(createStoreEventDto: CreateStoreEventDto) {
    try {
      return await this.prisma.storeEvent.create({ data: createStoreEventDto });
    } catch (error) {
      prismaError(error);
    }
  }

  async findAll() {
    return await this.prisma.storeEvent.findMany();
  }

  async findOne(id: number) {
    const foundRecord = await this.prisma.storeEvent.findUnique({
      where: { id },
    });

    if (!foundRecord) {
      throw new NotFoundException('Record not found');
    }

    return foundRecord;
  }

  async update(id: number, updateStoreEventDto: UpdateStoreEventDto) {
    try {
      return await this.prisma.storeEvent.update({
        where: { id },
        data: updateStoreEventDto,
      });
    } catch (error) {
      prismaError(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.storeEvent.delete({ where: { id } });
    } catch (error) {
      prismaError(error);
    }
  }
}
