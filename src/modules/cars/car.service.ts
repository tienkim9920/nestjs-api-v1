import { Injectable, Inject } from '@nestjs/common';
import { CarDto } from 'src/dto/car.dto';
import { ICarRepository } from "src/interfaces/ICarRepository.interface";
import { Car } from "src/models/car.model";

@Injectable()
export class CarService {
  constructor(
    @Inject('ICarRepository')
    private readonly carRepository: ICarRepository,
  ) {}

  async findAll(): Promise<Car[]> {
    return await this.carRepository.findAll();
  }

  async findById(id: number): Promise<Car> {
    return await this.carRepository.findById(id);
  }

  async create(car: CarDto): Promise<Car> {
    return await this.carRepository.create(car);
  }

  async update(id: number, car: CarDto): Promise<Car> {
    return await this.carRepository.update(id, car);
  }

  async delete(id: number): Promise<boolean> {
    return await this.carRepository.delete(id);
  }

  async findRelationById(id: number): Promise<Car> {
    return await this.carRepository.findRelationById(id);
  }
}