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
import { SpecialStoreHoursService } from './special-store-hours.service';
import {
  CreateSpecialStoreHourDto,
  createSpecialStoreHourDtoSchema,
  UpdateSpecialStoreHourDto,
  updateSpecialStoreHourDtoSchema,
} from 'lgs-zod-dto';
import { ZodValidationPipe } from 'src/validation/zodValidation.pipe';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('special-store-hours')
export class SpecialStoreHoursController {
  constructor(
    private readonly specialStoreHoursService: SpecialStoreHoursService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ZodValidationPipe(createSpecialStoreHourDtoSchema))
  create(@Body() createSpecialStoreHourDto: CreateSpecialStoreHourDto) {
    return this.specialStoreHoursService.create(createSpecialStoreHourDto);
  }

  @Get()
  findAll() {
    return this.specialStoreHoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialStoreHoursService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateSpecialStoreHourDtoSchema))
    updateSpecialStoreHourDto: UpdateSpecialStoreHourDto,
  ) {
    return this.specialStoreHoursService.update(+id, updateSpecialStoreHourDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.specialStoreHoursService.remove(+id);
  }
}
