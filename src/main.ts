import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './shared/config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(Config);
  const port = config.get('PORT');
  await app.listen(port || 3000);
}
bootstrap();
