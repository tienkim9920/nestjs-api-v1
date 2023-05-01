import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity, FindOptionsWhere, Repository } from 'typeorm';

export abstract class BaseRepository<T extends BaseEntity, R extends Repository<T>> {

  constructor(@InjectRepository(Repository<T>) protected readonly repository: R) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<T> {
    return this.repository.findOne({where: {id: id} as FindOptionsWhere<BaseEntity>});
  }

  async create(data: T): Promise<T> {
    return this.repository.save(data);
  }

  async update(id: number, data: T): Promise<T> {
    let result: T = await this.repository.findOne({where: {id: id} as FindOptionsWhere<BaseEntity>});
    // result = {...data};
    // await result.save();
    return result;
  }

  // delete(id: number): Promise<boolean> {}
}
