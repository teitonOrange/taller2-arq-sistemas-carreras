import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  
const app = await NestFactory.createMicroservice<MicroserviceOptions>
(AppModule, {
  transport: Transport.GRPC,
    options: {
      package: ['career', "subject"],
        protoPath: [
          join(__dirname, 'career/career.proto'),
          join(__dirname, 'subject/subject.proto')
        ],
      url: 'localhost:5002',
      },
  });

  await app.listen();
}
bootstrap();
