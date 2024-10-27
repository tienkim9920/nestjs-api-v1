import { Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/interfaces/IProductRepository.interface';
import { Product } from '../../models/product.model';
import { ProductDto } from 'src/dto/product.dto';
import { MetaParams } from 'src/constant/type';

@Injectable()
export class ProductRepository implements IProductRepository {
  private products: Product[] = [
    {
      id: 1,
      productName: 'Pizza Phô Mai',
      category_id: 1,
      description: 'Phô mai, muối',
      price: '199000',
    },
    {
      id: 2,
      productName: 'Pizza Thịt Bầm',
      category_id: 1,
      description: 'Thịt bầm, sốt cà chua',
      price: '200000',
    },
    {
      id: 3,
      productName: 'Pizza Hải Sản',
      category_id: 1,
      description: 'Vị tôm, cua',
      price: '250000',
    },
    {
      id: 4,
      productName: 'Pizza Hongkong',
      category_id: 2,
      description: 'Vị sa tế, thơm ngon',
      price: '300000',
    },
    {
      id: 5,
      productName: 'Pizza Nấm Chua',
      category_id: 2,
      description: 'Nấm xào',
      price: '150000',
    },
    {
      id: 6,
      productName: 'Pizza Kim Chi',
      category_id: 2,
      description: 'Vị kim chi',
      price: '270000',
    },
    {
      id: 7,
      productName: 'Pizza Củ Cải',
      category_id: 2,
      description: 'Vị củ cải',
      price: '170000',
    },
    {
      id: 8,
      productName: 'Pizza Thượng Hải',
      category_id: 2,
      description: 'Vị sa bò, thơm ngon',
      price: '300000',
    },
    {
      id: 9,
      productName: 'Pizza Cua',
      category_id: 2,
      description: 'Vị cua biển',
      price: '350000',
    },
    {
      id: 10,
      productName: 'Pizza Mực',
      category_id: 2,
      description: 'Vị mực biển',
      price: '330000',
    },
    {
      id: 11,
      productName: 'Pizza Tôm',
      category_id: 2,
      description: 'Vị tôm biển',
      price: '360000',
    },
    {
      id: 12,
      productName: 'Pizza Ốc',
      category_id: 2,
      description: 'Vị ốc biển',
      price: '290000',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  create(data: Partial<Product>): Product {
    const product: Product = {
      id: Math.random(),
      category_id: 2,
      ...data,
    };
    this.products = [product, ...this.products];
    return product;
  }

  findById(id: number): Product {
    const index: number = this.products.findIndex((item) => +item?.id === +id);
    return this.products[index];
  }

  update(id: number, data: Partial<ProductDto>): Product {
    const index: number = this.products.findIndex((item) => +item?.id === +id);
    this.products[index].productName = data.productName;
    this.products[index].price = data.price;
    this.products[index].description = data.description;
    this.products[index].category_id = data.category_id;
    return this.products[index];
  }

  delete(id: number): boolean {
    const index: number = this.products.findIndex((item) => +item?.id === +id);
    if (index !== 1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }

  // page = 2
  findProductHome(meta: MetaParams): Product[] {
    const limit = 3;
    const end = Number(meta.page) * limit;
    if (!meta.search) {
      const start = (Number(meta.page) - 1) * limit;
      const newProducts = this.products.slice(start, end);
      return newProducts;
    } else {
      let searchProducts = this.products.slice(0, end);
      return searchProducts.filter(
        (item) =>
          item.productName.toUpperCase().indexOf(meta.search.toUpperCase()) !==
          -1,
      );
    }
  }
}
