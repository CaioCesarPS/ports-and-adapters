import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import {
  CAT_REPOSITORY,
  CatRepository,
} from 'src/interface/cat-repository.interface';

@Injectable()
export class CatsServicePA {
  constructor(
    @Inject(CAT_REPOSITORY) private readonly catRepository: CatRepository,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<void> {
    this.catRepository.create(createCatDto);
  }
}
