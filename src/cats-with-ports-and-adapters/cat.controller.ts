import { Body, Controller, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { CatsServicePA } from './cat.service';

@Controller('cats-pa')
export class CatsControllerPA {
  constructor(private readonly catsService: CatsServicePA) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
