import { Injectable } from '@nestjs/common';
import { ICategoryRepository } from 'src/interfaces/ICategoryRepository.interface';
import { Category } from 'src/models/category.model';

@Injectable()
export class CategoryRepository implements ICategoryRepository {

  getAll(): Category[] {
    return [];
  }

  detail(id: number): Category {
    return {}
  }

  create(data: Partial<Category>): Category {
    return {};
  }

  update(id: number, data: Partial<Category>): Category {
    return {}
  }

  delete(id: number): boolean {
    return true;
  }
}
