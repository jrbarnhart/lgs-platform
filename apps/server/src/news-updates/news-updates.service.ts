import { Injectable } from '@nestjs/common';
import { CreateNewsUpdateDto } from './dto/create-news-update.dto';
import { UpdateNewsUpdateDto } from './dto/update-news-update.dto';

@Injectable()
export class NewsUpdatesService {
  create(createNewsUpdateDto: CreateNewsUpdateDto) {
    return 'This action adds a new newsUpdate';
  }

  findAll() {
    return `This action returns all newsUpdates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsUpdate`;
  }

  update(id: number, updateNewsUpdateDto: UpdateNewsUpdateDto) {
    return `This action updates a #${id} newsUpdate`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsUpdate`;
  }
}
