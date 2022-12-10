import { ApiProperty } from "@nestjs/swagger";
import {
    IsString, MaxLength, IsNumber, Max, IsInt, IsDate
} from 'class-validator';
import { Message } from "src/shared/message";
import { Type } from 'class-transformer';

export class SpGenRg2Dto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DEL ID_LOTE' })
    P_ID_LOTE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE ID_CLIENTE' })
    P_ID_CLIENTE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(20, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE PARAMETRO PARA GENERAR LC' })
    P_PARAMETRO: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'INDICDOR DE MONTO' })
    P_MONTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE MOVIMIENTO' })
    P_IND_MOV: string
    //-----------------------------------------------------------------------------------------------------------------
    @Type(() => Date)
    @IsDate({ message: Message.ISDATE('$property') })
    @ApiProperty({ example: 'INDICADOR DE FECHA DE VIGENCIA' })
    P_FECVIGENCIA: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'INDICADOR DE NUMERO DE CHEQUE' })
    P_NO_CHEQUE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DEL BANCO QUE EXPIDE CHEQUE' })
    P_EXC_CHEQUE: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'INDICADOR DE NUMERO DE PALETA' })
    P_NO_PLAETA: number
    //-----------------------------------------------------------------------------------------------------------------
}
