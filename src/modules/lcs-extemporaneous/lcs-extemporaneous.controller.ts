import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { LcsExtemporaneousService } from './lcs-extemporaneous.service';
import { addDayDto } from './dto/add-day.dto';
import { GetStatusDto } from './dto/get-status.dto';

@Controller('lcs-extemporaneous')
@ApiTags('lcs-extemporaneous')
export class LcsExtemporaneousController {
  constructor(private readonly service: LcsExtemporaneousService) {}

  @ApiOperation({ summary: 'FA_AGREGA_DIA_LC' })
  @ApiBody({ type: addDayDto })
  @Post('add-days')
  async addDayLC(@Body() data: addDayDto) {
    return await this.service.addDayLC(data);
  }

  @ApiOperation({ summary: 'FA_OBTIENE_ESTATUS_LC' })
  @ApiBody({ type: GetStatusDto })
  @Post('get-status-lc')
  async getStatusLC(@Body() data: GetStatusDto) {
    return this.service.getStatusLC(data);
  }
}
