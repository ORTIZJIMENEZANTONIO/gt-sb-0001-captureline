import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class SpRegistraRgsDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE ID_CLIENTE' })
    P_CLIENTE: number
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
    @ApiProperty({ example: 'INDICADOR DE ID_EVENTO' })
    P_ID_EVENTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'INDICDOR DE MONTO' })
    P_MONTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE LC_SAE CONFORMADA POR TIPO_LC, ID_CLIETE Y ID_LOTE PARA SUBASTAS ELECTRONICAS DE BM/BI PARA EL CASO DE PRESENCIALES O LICITACIONES TIPO_LC, ID_CLENTE , NO_CHEQUE O NO_PALETA' })
    P_REF_GSAE: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE LC_BANCO CONFORMADA POR FECHA_VIGENCIA, LC_SAE Y MONTO' })
    P_REF_GBANCO: string
    //-----------------------------------------------------------------------------------------------------------------
    @Type(() => Date)
    @IsDate({ message: Message.ISDATE('$property') })
    @ApiProperty({ example: 'INDICADOR DE FECHA DE VIGENCIA' })
    P_FEC_VIGENCIA: Date
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE ESTATUS DE GENERACION DE LC' })
    P_ESTATUS: string
    //-----------------------------------------------------------------------------------------------------------------
    @Type(() => Date)
    @IsDate({ message: Message.ISDATE('$property') })
    @ApiProperty({ example: 'INDICADOR DE FECHA DE REGISTRO' })
    P_FEC_REGISTRO: Date
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE USUARIO QUE GENERA' })
    P_USER_GENERA: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DEL BANCO QUE EXPIDE CHEQUE' })
    P_BANCO_CHEQUE: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'INDICADOR DE NUMERO DE CHEQUE' })
    P_NOCHEQUE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'INDICADOR DE NUMERO DE PALETA' })
    P_NOPALETA: number
    //-----------------------------------------------------------------------------------------------------------------
}
