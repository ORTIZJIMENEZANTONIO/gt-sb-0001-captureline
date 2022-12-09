import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { addDayDto } from './dto/add-day.dto';
import { CancelLCDto } from './dto/cancel-lc.dto';
import { GenerateLCSDto } from './dto/generate-lcs.dto';
import { GetCountLCDto } from './dto/get-count-lc.dto';
import { GetStatusDto } from './dto/get-status.dto';
import { GetValidityDateDto } from './dto/get-validity-date.dto';
import { UpdateLCDto } from './dto/update-lc.dto';

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

  async getValidityDate(data: GetValidityDateDto) {
    const pattern = { cmd: 'getValidityDate' };
    return await this.client.send(pattern, data);
  }

  async updateLC(data: UpdateLCDto) {
    const pattern = { cmd: 'updateLC' };
    return this.client.send(pattern, data);
  }

  async cancelLC(data: CancelLCDto) {
    const pattern = { cmd: 'cancelLC' };
    return await this.client.send(pattern, data);
  }

  async generateLCS(data: GenerateLCSDto) {
    const pattern = { cmd: 'generateLCS' };
    return this.client.send(pattern, data);
  }
}
