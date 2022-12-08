import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { LcsExtemporaneousService } from './lcs-extemporaneous.service';
import { addDayDto } from './dto/add-day.dto';
import { GetStatusDto } from './dto/get-status.dto';
import { GetCountLCDto } from './dto/get-count-lc.dto';
import { GetValidityDateDto } from './dto/get-validity-date.dto';
import { UpdateLCDto } from './dto/update-lc.dto';
import { CancelLCDto } from './dto/cancel-lc.dto';

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

  @ApiOperation({ summary: 'FA_OBTIENE_COUNT_LC' })
  @ApiBody({ type: GetCountLCDto })
  @Post('get-count-lc')
  async getCountLC(@Body() data: GetCountLCDto) {
    return await this.service.getCountLC(data);
  }

  @ApiOperation({ summary: 'FA_OBTIENE_FEC_VIGENCIA' })
  @ApiBody({ type: GetValidityDateDto })
  @Post('get-validity-date')
  async getValidityDate(@Body() data: GetValidityDateDto) {
    return await this.service.getValidityDate(data);
  }

  @ApiOperation({ summary: 'PA_ACTALIZA_LC' })
  @ApiBody({ type: UpdateLCDto })
  @Put('update-lc')
  async updateLC(@Body() data: UpdateLCDto) {
    return await this.service.updateLC(data);
  }

  @ApiOperation({ summary: 'PA_CANCELA_LC' })
  @ApiBody({ type: CancelLCDto })
  @Delete('cancel-lc')
  async cancelLC(@Body() data: CancelLCDto) {
    return await this.service.cancelLC(data);
  }
}
