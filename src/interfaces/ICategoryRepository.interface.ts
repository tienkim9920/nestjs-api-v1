import { Category } from "src/models/category.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface ICategoryRepository extends AbstractPromise<Category> {

}