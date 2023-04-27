// import { Controller, Get, Post, Put, Delete, Res, Body, Param } from '@nestjs/common';
// import { ProductService } from './product.service';
// import { Response } from 'express';
// import { ResponseData } from 'src/Services/ReponseData.service';
// import { ResponseType, ServerMessage, ServerStatus } from 'src/constant/type';
// import { Product } from '../../models/product.model';
// import { ProductDto } from 'src/dto/product.dto';

// @Controller('products')
// export class ProductController {
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
// }