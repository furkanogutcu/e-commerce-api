import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: `${process.env.HOST}:${process.env.PORT}`,
      package: 'authentication',
      protoPath: join(__dirname, './proto/authentication.proto'),
    },
  });

  await app.listen();
}
bootstrap();
