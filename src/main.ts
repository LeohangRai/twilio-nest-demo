import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 7000;
  await app.listen(port);
  console.log('Server is up and running at PORT: ', port);
}
bootstrap();
