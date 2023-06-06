import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CatPostgresSchema from './schema/cat.schema';
import CatPostgresRepository from './cat-postgres.repository';
import { CAT_POSTGRES_REPOSITORY } from 'src/interface/cat-postgres.interface';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cats',
      entities: [CatPostgresSchema],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([CatPostgresSchema]),
  ],
  controllers: [],
  providers: [
    {
      provide: CAT_POSTGRES_REPOSITORY,
      useClass: CatPostgresRepository,
    },
  ],
  exports: [CAT_POSTGRES_REPOSITORY],
})
export class PostgresDatabaseModule {}
