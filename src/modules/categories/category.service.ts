import { Injectable, Inject } from '@nestjs/common';
import { ICategoryRepository } from 'src/interfaces/ICategoryRepository.interface';

@Injectable()
export class CategoryService {

    constructor(@Inject('ICategoryRepository') private readonly categoryRepository: ICategoryRepository) {}
    
}