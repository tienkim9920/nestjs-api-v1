import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CarsEntity } from './entities/cars.entity';
import { CategoriesEntity } from './entities/categories.entity';
import { AccountsEntity } from './entities/accounts.entity';
import { CategoryModule } from './modules/categories/category.module';
import { CarModule } from './modules/cars/car.module';
import { AuthModule } from './modules/auth/auth.module';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constant/constant';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { RolesGuard } from './modules/auth/roles.guard';

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
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: 900000 },
    }),
    ProductModule,
    CategoryModule,
    CarModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // jwt for global
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // roles permission
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {

  }
}
