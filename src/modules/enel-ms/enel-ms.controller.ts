import { Body, Controller, Get, Post, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EnelMsService } from './enel-ms.service';
import { ObtenLcTerceroDto } from './dto/obtenLcTercero.dto';
import { ComerCalcLeneaDto } from './dto/comerCalcLenea.dto';

@Controller('enel-ms')
@ApiTags('enel-ms')
export class EnelMsController {
    constructor(private readonly service: EnelMsService) { }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'comer-calc-linea' })
    @ApiBody({ type: ComerCalcLeneaDto })
    @Post('comer-calc-linea')
    async comerCalcLenea(@Body() dataBody: ComerCalcLeneaDto) {
        return this.service.comerCalcLenea(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'obten-lc-tercero' })
    @ApiBody({ type: ObtenLcTerceroDto })
    @Post('obten-lc-tercero')
    async obtenLcTercero(@Body() dataBody: ObtenLcTerceroDto) {
        return this.service.obtenLcTercero(dataBody)
    }
}
