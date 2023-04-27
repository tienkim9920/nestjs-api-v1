import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { CarsEntity } from './cars.entity';

@Entity()
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @OneToMany(() => CarsEntity, cars => cars.category)
  @JoinColumn()
  cars: CarsEntity;
}