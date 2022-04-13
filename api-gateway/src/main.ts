import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression'
import * as express from 'express'

async function bootstrap () {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' })
  app.use(express.json())
  app.use(compression())

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
