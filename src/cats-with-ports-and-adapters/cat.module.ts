import { Module } from '@nestjs/common';
import { CatsControllerPA } from './cat.controller';
import { CatsServicePA } from './cat.service';
import { MongooseDatabaseModule } from './mongoose/mongoose.module';
import { PostgresDatabaseModule } from './postgres/postgress.module';

@Module({
  imports: [MongooseDatabaseModule, PostgresDatabaseModule],
  controllers: [CatsControllerPA],
  providers: [CatsServicePA],
})
export class CatsModuleWitPortsAndAdapters {}
