import { Controller, Get, Post, Put, Delete, Res, Body, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Response } from 'express';
import { ResponseData } from 'src/Services/ReponseData.service';
import { ResponseType } from 'src/constant/type';
import { Category } from '../../models/category.model';
import { CategoryDto } from 'src/dto/category.dto';

@Controller('categories')
export class CategoryController {
//   constructor(private readonly productService: ProductService) {}

//   @Get()
//   list(@Res() res: Response): ResponseType<Product> {
//     try {
//       return res.json(new ResponseData(this.productService.getProducts(), ServerStatus.OK, ServerMessage.OK));
//     } catch (error) {
//       return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
//     }
//   }

//   @Post()
//   create(@Body() product: ProductDto, @Res() res: Response): Response<Product> {

//   }

//   @Get('/:id')
//   detail(@Param('id') id: number, @Res() res: Response): Response<Product> {
    
//   }

//   @Put('/:id')
//   update(@Param('id') id: number, @Body() product: ProductDto, @Res() res: Response): Response<Product> {
    
//   }

//   @Delete('/:id')
//   delete(@Param('id') id: number, @Res() res: Response): Response<Product> {
    
//   }
}