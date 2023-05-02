import { Car } from "src/models/car.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface ICarRepository extends AbstractPromise<Car> {
    findRelationById(id: number): Promise<Car>;
}