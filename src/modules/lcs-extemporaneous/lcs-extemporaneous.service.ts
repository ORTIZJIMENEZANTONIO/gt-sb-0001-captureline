import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { addDayDto } from './dto/add-day.dto';
import { GetCountLCDto } from './dto/get-count-lc.dto';
import { GetStatusDto } from './dto/get-status.dto';

@Injectable()
export class LcsExtemporaneousService {
  constructor(
    @Inject('PK-LCS-EXTEMPORANEOUS') private readonly client: ClientProxy,
  ) {}

  async addDayLC(data: addDayDto) {
    const pattern = { cmd: 'addDayLC' };
    return await this.client.send(pattern, data);
  }

  async getStatusLC(data: GetStatusDto) {
    const pattern = { cmd: 'getStatusLC' };
    return await this.client.send(pattern, data);
  }

  async getCountLC(data: GetCountLCDto) {
    const pattern = { cmd: 'getCountLC' };
    return await this.client.send(pattern, data);
  }
}
