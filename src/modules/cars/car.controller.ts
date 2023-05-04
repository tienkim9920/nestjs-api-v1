import { Controller, Get, Post, Put, Delete, Res, Body, Param } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/services/response.service';
import { ResponseType } from 'src/constant/type';
import { Role, ServerMessage, ServerStatus } from 'src/constant/enum';
import { Car } from 'src/models/car.model';
import { CarService } from './car.service';
import { CarDto } from 'src/dto/car.dto';
import { Roles } from 'src/constant/decorator';

@Controller('cars')
export class CarController {
  constructor(protected readonly carService: CarService) { }

  @Get('')
  @Roles(Role.Admin)
  async list(@Res() res: Response): Promise<ResponseType<Car>> {
    try {
      return res.json(new ResponseData(await this.carService.findAll(), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Get('/:id')
  async detail(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Car>> {
    try {
      return res.json(new ResponseData(await this.carService.findById(id), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Post()
  async create(@Body() car: CarDto, @Res() res: Response): Promise<ResponseType<Car>> {
    try {
      return res.json(new ResponseData(await this.carService.create(car), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() car: CarDto, @Res() res: Response): Promise<ResponseType<Car>> {
    try {
      return res.json(new ResponseData(await this.carService.update(id, car), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: number, @Res() res: Response): Promise<Response<boolean>> {
    try {
      const isFlag: boolean = await this.carService.delete(id);
      if (isFlag) {
        return res.json(new ResponseData(isFlag, ServerStatus.OK, ServerMessage.OK));
      } else {
        return res.json(new ResponseData(isFlag, ServerStatus.ERROR, ServerMessage.ERROR));
      }
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Get('/relations/:id')
  async find(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Car>> {
    try {
      return res.json(new ResponseData(await this.carService.findRelationById(id), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }
}