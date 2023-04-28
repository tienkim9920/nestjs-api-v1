import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/entities/categories.entity';
import { BaseEntity, Repository } from 'typeorm';

type Constructor<T> = new (...args: any[]) => T;

export class BaseRepository<T extends BaseEntity, R extends Repository<T>> {
  @InjectRepository(entity) protected readonly repository: R;

  constructor(repository: R, entity: Constructor<T>) {
    this.repository = repository;
  }

  async getAll(): Promise<T[]> {
    return this.repository.find();
  }

  // detail(id: number): Promise<T> {
  //   return this.repository.findOne({
  //     where: {
  //       id: parseInt(id, 10)}
  //   })
  // }

  // create(data: Partial<T>): Promise<T> {}

  // update(id: number, data: Partial<T>): Promise<T> {}

  // delete(id: number): Promise<boolean> {}
}
