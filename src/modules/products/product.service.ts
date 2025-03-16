import { Injectable, Inject, ConsoleLogger } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { IProductRepository } from 'src/interfaces/IProductRepository.interface';
import { Product } from '../../models/product.model';
import { MetaParams } from 'src/constant/type';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: IProductRepository,
  ) {}

  @Cron('0 0 * * *')
  syncDataFromCrmToDatabase() {
    console.log('Cron job chay moi 5s:', new Date().toISOString());
  }

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

  findProductHome(meta: MetaParams): Product[] {
    return this.productRepository.findProductHome(meta);
  }
}
