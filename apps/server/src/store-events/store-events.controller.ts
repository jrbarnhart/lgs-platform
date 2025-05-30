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
import { StoreEventsService } from './store-events.service';
import {
  CreateStoreEventDto,
  UpdateStoreEventDto,
  createStoreEventDto,
  updateStoreEventDto,
} from 'lgs-zod-dto';
import { ZodValidationPipe } from 'src/validation/zodValidation.pipe';

@Controller('store-events')
export class StoreEventsController {
  constructor(private readonly storeEventsService: StoreEventsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createStoreEventDto))
  create(@Body() createStoreEventDto: CreateStoreEventDto) {
    return this.storeEventsService.create(createStoreEventDto);
  }

  @Get()
  findAll() {
    return this.storeEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeEventsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateStoreEventDto))
    updateStoreEventDto: UpdateStoreEventDto,
  ) {
    return this.storeEventsService.update(+id, updateStoreEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeEventsService.remove(+id);
  }
}
