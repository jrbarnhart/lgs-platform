import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsUpdatesService } from './news-updates.service';
import { CreateNewsUpdateDto, UpdateNewsUpdateDto } from 'lgs-zod-dto';

@Controller('news-updates')
export class NewsUpdatesController {
  constructor(private readonly newsUpdatesService: NewsUpdatesService) {}

  @Post()
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
    @Body() updateNewsUpdateDto: UpdateNewsUpdateDto,
  ) {
    return this.newsUpdatesService.update(+id, updateNewsUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsUpdatesService.remove(+id);
  }
}
