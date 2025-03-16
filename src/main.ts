declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
global.crypto = require('crypto');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(4000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
