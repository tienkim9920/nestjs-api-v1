import { Product } from "src/models/product.model";
import { AbstractOrigin } from "./AbstractRepository.interface";

export interface IProductRepository extends AbstractOrigin<Product> {
    
}