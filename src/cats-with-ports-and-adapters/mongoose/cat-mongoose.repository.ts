import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { CatRepository } from 'src/interface/cat-repository.interface';
import { Cat } from 'src/schema/cat.schema';

@Injectable()
export class CatMongooseRepository implements CatRepository {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(data: CreateCatDto): Promise<void> {
    const createdCat = new this.catModel(data);
    await createdCat.save();
  }
}
