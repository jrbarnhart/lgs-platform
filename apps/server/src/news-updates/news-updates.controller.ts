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
import { NewsUpdatesService } from './news-updates.service';
import {
  CreateNewsUpdateDto,
  UpdateNewsUpdateDto,
  createNewsUpdateDto,
  updateNewsUpdateDto,
} from 'lgs-zod-dto';
import { ZodValidationPipe } from 'src/zodValidation.pipe';

@Controller('news-updates')
export class NewsUpdatesController {
  constructor(private readonly newsUpdatesService: NewsUpdatesService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createNewsUpdateDto))
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
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateNewsUpdateDto))
    updateNewsUpdateDto: UpdateNewsUpdateDto,
  ) {
    return this.newsUpdatesService.update(+id, updateNewsUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsUpdatesService.remove(+id);
  }
}
