import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ObtenLcTerceroDto } from './dto/obtenLcTercero.dto';
import { ComerCalcLeneaDto } from './dto/comerCalcLenea.dto';
import { ModificaLcDto } from './dto/modificaLc.dto';
import { ActualizalccasDto } from './dto/actualizalccas.dto';

@Injectable()
export class EnelMsService {
    constructor(@Inject('ENEL-MS') private readonly client: ClientProxy,) { }
    //---------------------------------------------------------------------------------------------
    async comerCalcLenea(dataBody: ComerCalcLeneaDto) {
        const pattern = { cmd: 'comerCalcLenea' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async obtenLcTercero(dataBody: ObtenLcTerceroDto) {
        const pattern = { cmd: 'obtenLcTercero' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async modificaLcGen(dataBody: ModificaLcDto) {
        const pattern = { cmd: 'modificaLcGen' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async modificaLcCas(dataBody: ModificaLcDto) {
        const pattern = { cmd: 'modificaLcCas' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async actualizalccas(dataBody: ActualizalccasDto) {
        const pattern = { cmd: 'actualizalccas' };
        return this.client.send(pattern, dataBody);
    }
}
