import { Module } from '@nestjs/common';
import { Cat, CatSchema } from 'src/schema/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CatMongooseRepository } from './cat-mongoose.repository';
import { CAT_REPOSITORY } from 'src/interface/cat-repository.interface';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/admin'),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [],
  providers: [
    {
      provide: CAT_REPOSITORY,
      useClass: CatMongooseRepository,
    },
  ],
  exports: [CAT_REPOSITORY],
})
export class MongooseDatabaseModule {}
