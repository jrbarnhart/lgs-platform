import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import {
  CreateOfferDto,
  createOfferDtoSchema,
  UpdateOfferDto,
  updateOfferDtoSchema,
} from 'lgs-zod-dto';
import { ZodValidationPipe } from 'src/validation/zodValidation.pipe';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ZodValidationPipe(createOfferDtoSchema))
  create(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.create(createOfferDto);
  }

  @Get()
  findAll() {
    return this.offersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateOfferDtoSchema))
    updateOfferDto: UpdateOfferDto,
  ) {
    return this.offersService.update(+id, updateOfferDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.offersService.remove(+id);
  }
}
