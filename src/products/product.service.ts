import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';
import { ProductRepository } from './product.repository';
import { ProductDto } from 'src/dto/product.dto';

@Injectable()
export class ProductService  {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    getProducts(): Product[] {
        return this.productRepository.getAll();
    }

    createProduct(product: ProductDto): Product {
        return this.productRepository.create(product);
    }
}