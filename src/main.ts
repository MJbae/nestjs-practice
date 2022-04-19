import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

const serverConfig = config.get('server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverConfig.port);
}
bootstrap();
