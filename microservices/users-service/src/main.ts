import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module';
import { config } from './config';
import * as path from 'path'

async function bootstrap () {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${config.url}:${config.port}`,
      package: 'users',
      protoPath: path.join(__dirname, './_proto/users.proto'),
      logger: {
        enums: String,
        objects: true,
        arrays: true,
      }
    }
  })

  app.useLogger(app.get(Logger))

  return app.listen()
}

bootstrap();
