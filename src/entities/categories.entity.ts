import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ProductsEntity } from './products.entity';

@Entity()
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @OneToMany(() => ProductsEntity, products => products.category)
  @JoinColumn()
  products: ProductsEntity;
}