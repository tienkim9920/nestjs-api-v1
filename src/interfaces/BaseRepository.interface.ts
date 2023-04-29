import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity, FindOptionsWhere, Repository } from 'typeorm';

export class BaseRepository<T extends BaseEntity, R extends Repository<T>> {

  constructor(@InjectRepository(Repository<T>) protected readonly repository: R) {}

  async getAll(): Promise<T[]> {
    return this.repository.find();
  }

  async detail(id: number): Promise<T> {
    return this.repository.findOne({where: {id: id} as FindOptionsWhere<BaseEntity>});
  }

  // create(data: Partial<T>): Promise<T> {}

  // update(id: number, data: Partial<T>): Promise<T> {}

  // delete(id: number): Promise<boolean> {}
}
