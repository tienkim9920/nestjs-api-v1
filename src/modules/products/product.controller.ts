import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Public } from 'src/constant/decorator';
import { ServerMessage, ServerStatus } from 'src/constant/enum';
import { ResponseType } from 'src/constant/type';
import { ProductDto } from 'src/dto/product.dto';
import { ResponseData } from 'src/services/response.service';
import { Product } from '../../models/product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Public()
  @Get()
  getProducts(@Res() res: Response): ResponseType<Product> {
    try {
      return res.json(
        new ResponseData(
          this.productService.findAll(),
          ServerStatus.OK,
          ServerMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
      );
    }
  }

  @Public()
  @Post()
  createProduct(
    @Body() product: ProductDto,
    @Res() res: Response,
  ): ResponseType<Product> {
    try {
      return res.json(
        new ResponseData(
          this.productService.createProduct(product),
          ServerStatus.OK,
          ServerMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
      );
    }
  }

  @Public()
  @Get('/:id')
  detailProduct(
    @Param('id') id: number,
    @Res() res: Response,
  ): ResponseType<Product> {
    try {
      return res.json(
        new ResponseData(
          this.productService.findById(id),
          ServerStatus.OK,
          ServerMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
      );
    }
  }

  @Public()
  @Put('/:id')
  updateProduct(
    @Param('id') id: number,
    @Body() product: ProductDto,
    @Res() res: Response,
  ): ResponseType<Product> {
    try {
      return res.json(
        new ResponseData(
          this.productService.updateProduct(id, product),
          ServerStatus.OK,
          ServerMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
      );
    }
  }

  @Public()
  @Delete('/:id')
  deleteProduct(
    @Param('id') id: number,
    @Res() res: Response,
  ): ResponseType<Product> {
    try {
      return res.json(
        new ResponseData(
          this.productService.deleteProduct(id),
          ServerStatus.OK,
          ServerMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
      );
    }
  }

  @Public()
  @Get('/home/pagination')
  getHomeProducts(
    @Query('page') page: string,
    @Query('search') search: string,
    @Res() res: Response,
  ): ResponseType<Product> {
    try {
      return res.json(
        new ResponseData(
          this.productService.findProductHome({ page, search }),
          ServerStatus.OK,
          ServerMessage.OK,
        ),
      );
    } catch (error) {
      return res.json(
        new ResponseData(null, ServerStatus.ERROR, ServerMessage.ERROR),
      );
    }
  }
}
