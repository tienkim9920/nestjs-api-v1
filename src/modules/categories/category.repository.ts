import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from 'src/entities/categories.entity';
import { BaseRepository } from 'src/interfaces/BaseRepository.interface';
import { ICategoryRepository } from 'src/interfaces/ICategoryRepository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository 
  extends BaseRepository<CategoriesEntity, Repository<CategoriesEntity>> 
  implements ICategoryRepository {

  constructor (
    @InjectRepository(CategoriesEntity)
    protected readonly repository: Repository<CategoriesEntity>) {
      super(repository);
    }
}
