import { Module } from '@nestjs/common';
import { PkComerLcController } from './pk-comer-lc.controller';
import { PkComerLcService } from './pk-comer-lc.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [PkComerLcController],
  providers: [PkComerLcService],
  imports: [
    ClientsModule.register([
      {
        name: 'PK-COMER-LC',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      }
    ]),
  ]
})
export class PkComerLcModule {}
