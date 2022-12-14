import { Body, Controller, Get, Post, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { PkComerLcService } from './pk-comer-lc.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PObtDatlcDto } from './dto/pObtDatlc.dto';
import { SpGenLcDto } from './dto/spGenLc.dto';
import { SpRegistraLcDto } from './dto/spRegistraLc.dto';
import { SpGenRgDto } from './dto/spGenRg.dto';
import { SpRegistraRgsDto } from './dto/spRegistraRgs.dto';
import { PGenAvisoVenLcsDto } from './dto/pGenAvisoVenLcs.dto';
import { SpGenLc2Dto } from './dto/spGenLc2.dto';
import { SpGenRg2Dto } from './dto/spGenRg2.dto';

@Controller('pk-comer-lc')
@ApiTags('pk-comer-lc')
export class PkComerLcController {
    constructor(private readonly service: PkComerLcService) { }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'p-obt-datlc' })
    @ApiBody({ type: PObtDatlcDto })
    @Post('p-obt-datlc')
    async pObtDatlc(@Body() dataBody: PObtDatlcDto) {
        return this.service.pObtDatlc(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'sp-gen-lc' })
    @ApiBody({ type: SpGenLcDto })
    @Post('sp-gen-lc')
    async spGenLc(@Body() dataBody: SpGenLcDto) {
        return this.service.spGenLc(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'sp-gen-lc2' })
    @ApiBody({ type: SpGenLc2Dto })
    @Post('sp-gen-lc2')
    async spGenLc2(@Body() dataBody: SpGenLc2Dto) {
        return this.service.spGenLc2(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'sp-registra-lc' })
    @ApiBody({ type: SpRegistraLcDto })
    @Post('sp-registra-lc')
    async spRegistraLc(@Body() dataBody: SpRegistraLcDto) {
        return this.service.spRegistraLc(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'sp-gen-rg' })
    @ApiBody({ type: SpGenRgDto })
    @Post('sp-gen-rg')
    async spGenRg(@Body() dataBody: SpGenRgDto) {
        return this.service.spGenRg(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'sp-gen-rg2' })
    @ApiBody({ type: SpGenRgDto })
    @Post('sp-gen-rg2')
    async spGenRg2(@Body() dataBody: SpGenRg2Dto) {
        return this.service.spGenRg2(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'sp-registra-rgs' })
    @ApiBody({ type: SpRegistraRgsDto })
    @Post('sp-registra-rgs')
    async spRegistraRgs(@Body() dataBody: SpRegistraRgsDto) {
        return this.service.spRegistraRgs(dataBody)
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'p-comer-gen-correos-lcs' })
    @Post('p-comer-gen-correos-lcs')
    async pComerGenCorreosLcs() {
        return this.service.pComerGenCorreosLcs()
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'p-comer-gen-correos-lcs-html' })
    @Post('p-comer-gen-correos-lcs-html')
    async pComerGenCorreosLcsHtml() {
        return this.service.pComerGenCorreosLcsHtml()
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'p-gen-aviso-ven-lcs' })
    @ApiBody({ type: PGenAvisoVenLcsDto })
    @Post('p-gen-aviso-ven-lcs')
    async pGenAvisoVenLcs(@Body() dataBody: PGenAvisoVenLcsDto) {
        return this.service.pGenAvisoVenLcs(dataBody)
    }
    //---------------------------------------------------------------------------------------------
}
