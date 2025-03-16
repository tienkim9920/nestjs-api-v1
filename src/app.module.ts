import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';

@Module({
  imports: [
    ProductModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
