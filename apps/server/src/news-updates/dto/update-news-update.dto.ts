import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsUpdateDto } from './create-news-update.dto';

export class UpdateNewsUpdateDto extends PartialType(CreateNewsUpdateDto) {}
