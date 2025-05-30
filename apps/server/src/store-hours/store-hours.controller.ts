import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { StoreHoursService } from './store-hours.service';
import {
  CreateStoreHourDto,
  createStoreHourDtoSchema,
  UpdateStoreHourDto,
  updateStoreHourDtoSchema,
} from 'lgs-zod-dto';
import { ZodValidationPipe } from 'src/validation/zodValidation.pipe';

@Controller('store-hours')
export class StoreHoursController {
  constructor(private readonly storeHoursService: StoreHoursService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createStoreHourDtoSchema))
  create(@Body() createStoreHourDto: CreateStoreHourDto) {
    return this.storeHoursService.create(createStoreHourDto);
  }

  @Get()
  findAll() {
    return this.storeHoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeHoursService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateStoreHourDtoSchema))
    updateStoreHourDto: UpdateStoreHourDto,
  ) {
    return this.storeHoursService.update(+id, updateStoreHourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeHoursService.remove(+id);
  }
}
