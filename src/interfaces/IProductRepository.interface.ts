import { Product } from "src/models/product.model";
import { AbstractRepository } from "./AbstractRepository.interface";

export interface IProductRepository extends AbstractRepository<Product> {
    
}