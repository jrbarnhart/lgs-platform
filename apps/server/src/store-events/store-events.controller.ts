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
import { StoreEventsService } from './store-events.service';
import {
  CreateStoreEventDto,
  createStoreEventDtoSchema,
  UpdateStoreEventDto,
  updateStoreEventDtoSchema,
} from 'lgs-zod-dto';
import { ZodValidationPipe } from 'src/validation/zodValidation.pipe';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('store-events')
export class StoreEventsController {
  constructor(private readonly storeEventsService: StoreEventsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ZodValidationPipe(createStoreEventDtoSchema))
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
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateStoreEventDtoSchema))
    updateStoreEventDto: UpdateStoreEventDto,
  ) {
    return this.storeEventsService.update(+id, updateStoreEventDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.storeEventsService.remove(+id);
  }
}
