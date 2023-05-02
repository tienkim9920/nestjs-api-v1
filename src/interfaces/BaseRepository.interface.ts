import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity, DeepPartial, DeleteResult, FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';

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

  async update(id: number, data: T extends DeepPartial<ObjectLiteral> ? ObjectLiteral : {}): Promise<T> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const isFlag: DeleteResult = await this.repository.delete(id);
    return isFlag.affected === 1;
  }
}
