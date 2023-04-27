import { Category } from "src/models/category.model";
import { AbstractRepository } from "./AbstractRepository.interface";

export interface ICategoryRepository extends AbstractRepository<Category> {
    
}