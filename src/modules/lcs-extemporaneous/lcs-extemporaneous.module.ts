import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { LcsExtemporaneousService } from './lcs-extemporaneous.service';
import { LcsExtemporaneousController } from './lcs-extemporaneous.controller';

@Module({
  providers: [LcsExtemporaneousService],
  controllers: [LcsExtemporaneousController],
  imports: [
    ClientsModule.register([
      {
        name: 'PK-LCS-EXTEMPORANEOUS',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      }
    ]),
  ]
})
export class LcsExtemporaneousModule {}
