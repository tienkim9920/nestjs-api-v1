import { Injectable, Inject } from '@nestjs/common';
import { CategoryDto } from 'src/dto/category.dto';
import { ICategoryRepository } from 'src/interfaces/ICategoryRepository.interface';
import { Category } from 'src/models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }

  async findById(id: number): Promise<Category> {
    return await this.categoryRepository.findById(id);
  }

  async create(category: CategoryDto): Promise<Category> {
    return await this.categoryRepository.create(category);
  }

  async update(id: number, category: CategoryDto): Promise<Category> {
    return await this.categoryRepository.update(id, category);
  }

  async delete(id: number): Promise<boolean> {
    return await this.categoryRepository.delete(id);
  }
}
