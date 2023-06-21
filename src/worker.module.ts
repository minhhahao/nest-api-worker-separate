import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AudioWorkerModule } from './audio/audio.worker.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AudioWorkerModule,
  ],
  controllers: [],
  providers: [],
})
export class WorkerModule {}
