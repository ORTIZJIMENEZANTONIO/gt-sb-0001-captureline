import { Module } from '@nestjs/common';
import { EnelMsService } from './enel-ms.service';
import { EnelMsController } from './enel-ms.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [EnelMsService],
  controllers: [EnelMsController],
  imports: [
    ClientsModule.register([
      {
        name: 'ENEL-MS',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      }
    ]),
  ]
})
export class EnelMsModule {}
