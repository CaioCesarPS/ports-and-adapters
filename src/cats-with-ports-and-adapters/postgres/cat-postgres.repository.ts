import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import CatPostgresSchema from './schema/cat.schema';
import { Repository } from 'typeorm';
import CatPostgresRepositoryInterface, { CatInterface } from 'src/interface/cat-postgres.interface';

@Injectable()
export default class CatPostgresRepository implements CatPostgresRepositoryInterface {
  constructor(
    @InjectRepository(CatPostgresSchema)
    private catPostgresSchema: Repository<CatPostgresSchema>,
  ) {}

  async create(data: CreateCatDto): Promise<CatInterface> {
    const cat = new CatPostgresSchema();
    cat.name = data.name;
    cat.age = data.age;
    cat.breed = data.breed;
    return await this.catPostgresSchema.save(cat);
  }
}
