import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cat.controller';
import { CatsService } from './cat.service';
import { Cat, CatSchema } from 'src/schema/cat.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/admin'),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModuleWithoutPorts {}
