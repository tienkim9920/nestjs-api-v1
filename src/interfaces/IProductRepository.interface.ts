import { Product } from "src/models/product.model";
import { AbstractOrigin } from "./AbstractRepository.interface";
import { MetaParams } from "src/constant/type";

export interface IProductRepository extends AbstractOrigin<Product> {
  findProductHome(meta: MetaParams): Product[];
}