import { Controller, Get, Post, Res, Req, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { ResponseData } from 'src/Services/ReponseData.service';
import { ResponseType, ServerMessage, ServerStatus } from 'src/constant/type';
import { Product } from '../models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(@Res() res: Response): ResponseType<Product> {
    try {
      return res.json(new ResponseData(this.productService.getProducts(), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }

  @Post()
  createProduct(@Body() product: ProductDto, @Res() res: Response): Response<Product> {
    try {
      return res.json(new ResponseData(this.productService.createProduct(product), ServerStatus.OK, ServerMessage.OK));
    } catch (error) {
      return res.json(new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR));
    }
  }
}