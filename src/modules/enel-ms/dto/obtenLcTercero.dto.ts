import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class ObtenLcTerceroDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    ID_EVENTO_IN: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    CVE_PROCESO_IN: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    SALIDA_OUT: string
}
