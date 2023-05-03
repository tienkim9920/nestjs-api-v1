import { Controller, Get, Post, Put, Delete, Res, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Response } from 'express';
import { ResponseData } from 'src/services/response.service';
import { ResponseType } from 'src/constant/type';
import { Category } from '../../models/category.model';
import { CategoryDto } from 'src/dto/category.dto';
import { ServerMessage, ServerStatus } from 'src/constant/enum';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async list(@Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(new ResponseData(await this.categoryService.findAll(), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Get('/:id')
  async detail(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(new ResponseData(await this.categoryService.findById(id), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Post()
  async create(@Body() category: CategoryDto, @Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(new ResponseData(await this.categoryService.create(category), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() category: CategoryDto, @Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(new ResponseData(await this.categoryService.update(id, category), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: number, @Res() res: Response): Promise<Response<boolean>> {
    try {
      const isFlag: boolean = await this.categoryService.delete(id);
      if (isFlag) {
        return res.json(new ResponseData(isFlag, ServerStatus.OK, ServerMessage.OK));
      } else {
        return res.json(new ResponseData(isFlag, ServerStatus.ERROR, ServerMessage.ERROR));
      }
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }
}