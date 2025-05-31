import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfferDto, UpdateOfferDto } from 'lgs-zod-dto';
import { PrismaService } from 'src/prisma.service';
import prismaError from 'src/validation/prismaError';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async create(createOfferDto: CreateOfferDto) {
    try {
      return await this.prisma.offer.create({ data: createOfferDto });
    } catch (error) {
      prismaError(error);
    }
  }

  async findAll() {
    return await this.prisma.offer.findMany();
  }

  async findOne(id: number) {
    const foundRecord = await this.prisma.offer.findUnique({
      where: { id },
    });

    if (!foundRecord) {
      throw new NotFoundException('Record not found');
    }

    return foundRecord;
  }

  async update(id: number, updateOfferDto: UpdateOfferDto) {
    try {
      return await this.prisma.offer.update({
        where: { id },
        data: updateOfferDto,
      });
    } catch (error) {
      prismaError(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.offer.delete({ where: { id } });
    } catch (error) {
      prismaError(error);
    }
  }
}
