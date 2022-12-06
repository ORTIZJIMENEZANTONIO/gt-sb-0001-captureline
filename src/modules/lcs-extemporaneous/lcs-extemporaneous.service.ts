import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LcsExtemporaneousService {
  constructor(
    @Inject('PK-LCS-EXTEMPORANEOUS') private readonly client: ClientProxy,
  ) {}

  async addDayLC(data: { pDate: Date; pkeyLC: String }) {
    const pattern = { cmd: 'addDayLC' };
    return await this.client.send(pattern, data);
  }
}
