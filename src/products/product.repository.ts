import { IProductRepository } from "src/interfaces/IProductRepository.interface";
import { Product } from "../models/product.model";

export class ProductRepository implements IProductRepository {
    private products: Product[] = [
        { id: 1, productName: 'Chang', category_id: 1, price: '18'},
        { id: 2, productName: 'Chair', category_id: 1, price: '25'},
    ];

    getAll(): Product[] {
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

    detail(id: number, data: Partial<Product>): void {
        
    }

    update(id: number, data: Partial<Product>): void {
        
    }

    delete(id: number): void {
        
    }
}