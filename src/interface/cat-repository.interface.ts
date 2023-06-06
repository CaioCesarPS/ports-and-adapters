import { CreateCatDto } from 'src/dto/create-cat.dto';

export const CAT_REPOSITORY = 'CAT_REPOSITORY';

export interface CatRepository {
  create(data: CreateCatDto): Promise<void>;
}
