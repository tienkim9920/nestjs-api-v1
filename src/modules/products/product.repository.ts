import { Injectable } from '@nestjs/common';
import { IProductRepository } from "src/interfaces/IProductRepository.interface";
import { Product } from "../../models/product.model";
import { ProductDto } from 'src/dto/product.dto';

@Injectable()
export class ProductRepository implements IProductRepository {
    private products: Product[] = [
        { id: 1, productName: 'Chang', category_id: 1, price: '18'},
        { id: 2, productName: 'Chair', category_id: 1, price: '25'},
    ];

    findAll(): Product[] {
        return this.products;
    }

    create(data: Partial<Product>): Product {
        const product: Product = {
            id: Math.random(),
            ...data
        };
        this.products.push(product);
        return product;
    }

    findById(id: number): Product {
        const index: number = this.products.findIndex(item => +item?.id === +id);
        return this.products[index];
    }

    update(id: number, data: Partial<ProductDto>): Product {
        const index: number = this.products.findIndex(item => +item?.id === +id);
        this.products[index].productName = data.productName;
        this.products[index].price = data.price;
        this.products[index].category_id = data.category_id;
        return this.products[index];
    }

    delete(id: number): boolean {
        const index: number = this.products.findIndex(item => +item?.id === +id);
        if (index !== 1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
}