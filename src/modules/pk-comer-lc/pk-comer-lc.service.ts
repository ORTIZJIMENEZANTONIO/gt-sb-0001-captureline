import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PObtDatlcDto } from './dto/pObtDatlc.dto';
import { SpGenLcDto } from './dto/spGenLc.dto';
import { SpRegistraLcDto } from './dto/spRegistraLc.dto';
import { SpGenRgDto } from './dto/spGenRg.dto';
import { SpRegistraRgsDto } from './dto/spRegistraRgs.dto';
import { PGenAvisoVenLcsDto } from './dto/pGenAvisoVenLcs.dto';

@Injectable()
export class PkComerLcService {
    constructor(@Inject('PK-COMER-LC') private readonly client: ClientProxy,) { }
    //---------------------------------------------------------------------------------------------
    async pObtDatlc(dataBody: PObtDatlcDto) {
        const pattern = { cmd: 'pObtDatlc' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async spGenLc(dataBody: SpGenLcDto) {
        const pattern = { cmd: 'spGenLc' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async spRegistraLc(dataBody: SpRegistraLcDto) {
        const pattern = { cmd: 'spRegistraLc' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async spGenRg(dataBody: SpGenRgDto) {
        const pattern = { cmd: 'spGenRg' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async spRegistraRgs(dataBody: SpRegistraRgsDto) {
        const pattern = { cmd: 'spRegistraRgs' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
    async pComerGenCorreosLcs() {
        const pattern = { cmd: 'pComerGenCorreosLcs' };
        return this.client.send(pattern, false);
    }
    //---------------------------------------------------------------------------------------------
    async pComerGenCorreosLcsHtml() {
        const pattern = { cmd: 'pComerGenCorreosLcsHtml' };
        return this.client.send(pattern, false);
    }
    //---------------------------------------------------------------------------------------------
    async pGenAvisoVenLcs(dataBody: PGenAvisoVenLcsDto) {
        const pattern = { cmd: 'pGenAvisoVenLcs' };
        return this.client.send(pattern, dataBody);
    }
    //---------------------------------------------------------------------------------------------
}
