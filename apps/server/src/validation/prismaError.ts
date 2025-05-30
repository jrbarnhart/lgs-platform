import {
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from 'generated/prisma/runtime/library';

export default function prismaError(error: unknown): never {
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': // Unique constraint violation
        throw new ConflictException('A record with this value already exists');

      case 'P2025': // Record not found
        throw new NotFoundException('Record not found');

      case 'P2003': // Foreign key constraint violation
        throw new BadRequestException('Referenced record does not exist');

      case 'P2014': // Required relation violation
        throw new BadRequestException(
          'Cannot delete record due to related data',
        );

      default:
        console.log('Unhandled Prisma error:', error.code, error.message);
        throw new BadRequestException('Database operation failed');
    }
  }

  if (error instanceof PrismaClientValidationError) {
    throw new BadRequestException('Invalid data provided');
  }

  // Unexpected errors
  throw new BadRequestException('An unknown error occurred');
}
