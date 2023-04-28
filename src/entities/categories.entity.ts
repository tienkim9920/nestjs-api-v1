import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BaseEntity } from 'typeorm';
import { CarsEntity } from './cars.entity';

@Entity('categories')
export class CategoriesEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @OneToMany(() => CarsEntity, cars => cars.category)
  @JoinColumn()
  cars: CarsEntity[];
}