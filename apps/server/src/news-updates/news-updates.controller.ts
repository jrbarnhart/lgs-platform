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
import { NewsUpdatesService } from './news-updates.service';
import {
  CreateNewsUpdateDto,
  createNewsUpdateDtoSchema,
  UpdateNewsUpdateDto,
  updateNewsUpdateDtoSchema,
} from 'lgs-zod-dto';
import { ZodValidationPipe } from 'src/validation/zodValidation.pipe';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('news-updates')
export class NewsUpdatesController {
  constructor(private readonly newsUpdatesService: NewsUpdatesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ZodValidationPipe(createNewsUpdateDtoSchema))
  create(@Body() createNewsUpdateDto: CreateNewsUpdateDto) {
    return this.newsUpdatesService.create(createNewsUpdateDto);
  }

  @Get()
  findAll() {
    return this.newsUpdatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsUpdatesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateNewsUpdateDtoSchema))
    updateNewsUpdateDto: UpdateNewsUpdateDto,
  ) {
    return this.newsUpdatesService.update(+id, updateNewsUpdateDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.newsUpdatesService.remove(+id);
  }
}
