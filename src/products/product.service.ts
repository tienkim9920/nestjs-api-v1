import { Injectable, Inject } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { IProductRepository } from 'src/interfaces/IProductRepository.interface';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

    constructor(@Inject('IProductRepository') private readonly productRepository: IProductRepository) {}

    getProducts(): Product[] {
        return this.productRepository.getAll();
    }

    createProduct(product: ProductDto): Product {
        return this.productRepository.create(product);
    }

    detailProduct(id: number): Product {
        return this.productRepository.detail(id);
    }

    updateProduct(id: number, product: ProductDto): Product {
        return this.productRepository.update(id, product);
    }

    deleteProduct(id: number): boolean {
        return this.productRepository.delete(id);
    }
}