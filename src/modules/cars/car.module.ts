import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsEntity } from 'src/entities/cars.entity';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarRepository } from './car.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarsEntity])],
  controllers: [CarController],
  providers: [
    CarService,
    {
      useClass: CarRepository,
      provide: 'ICarRepository',
    }
  ],
})
export class CarModule {}