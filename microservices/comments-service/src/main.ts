import { ServerCredentials } from '@grpc/grpc-js'
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { config } from '@server/config'
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      credentials: ServerCredentials.createInsecure(),
      url: `${config.url}:${config.port}`,
      package: 'comments',
      protoPath: path.join(__dirname, './_proto/comments.proto'),
      logger: {
        enums: String,
        objects: true,
        arrays: true,
      },
    }
  })
  // app.useLogger(app.get(Logger))

  await app.startAllMicroservices()
  await app.listen(50052)
}

bootstrap();
