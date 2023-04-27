import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CarsEntity } from './entities/cars.entity';
import { CategoriesEntity } from './entities/categories.entity';
import { AccountsEntity } from './entities/accounts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs-api-v1',
      entities: [AccountsEntity, CarsEntity, CategoriesEntity],
      synchronize: true,
    }),
    ProductModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
