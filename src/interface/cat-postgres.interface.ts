import { CreateCatDto } from 'src/dto/create-cat.dto';

export const CAT_POSTGRES_REPOSITORY = 'CAT_POSTGRES_REPOSITORY';

export interface CatInterface {
  id: string;
  name: string;
  age: number;
  breed: string;
}

export default interface CatPostgresRepositoryInterface {
  create(data: CreateCatDto): Promise<CatInterface>;
}
