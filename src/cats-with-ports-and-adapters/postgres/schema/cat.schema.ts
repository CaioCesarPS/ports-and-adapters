import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export default class CatPostgresSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
