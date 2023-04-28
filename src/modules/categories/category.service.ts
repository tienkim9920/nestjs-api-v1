import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from 'src/interfaces/ICategoryRepository.interface';
import { Category } from 'src/models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }
}
