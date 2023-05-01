import { Injectable, Inject } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { IProductRepository } from 'src/interfaces/IProductRepository.interface';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductService {

    constructor(@Inject('IProductRepository') private readonly productRepository: IProductRepository) {}

    findAll(): Product[] {
        return this.productRepository.findAll();
    }

    createProduct(product: ProductDto): Product {
        return this.productRepository.create(product);
    }

    findById(id: number): Product {
        return this.productRepository.findById(id);
    }

    updateProduct(id: number, product: ProductDto): Product {
        return this.productRepository.update(id, product);
    }

    deleteProduct(id: number): boolean {
        return this.productRepository.delete(id);
    }
}