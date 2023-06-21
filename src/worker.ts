import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkerModule);
  await app.listen(4000);
  console.log(`Worker is running on: ${await app.getUrl()}`);
}
bootstrap();
