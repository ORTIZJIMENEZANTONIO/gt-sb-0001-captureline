import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class SpRegistraLcDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @Max(999999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE MONTO' })
    P_MONTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE ESTATUS DE LC' })
    P_ESTATUS: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'INDICADORE DE PALETA' })
    P_PALETA: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE TIPO DE REFERENCIA' })
    P_TIPO_REF: number
    //-----------------------------------------------------------------------------------------------------------------
    @Type(() => Date)
    @IsDate({ message: Message.ISDATE('$property') })
    @ApiProperty({ example: 'INDICADOR DE FECHA DE REGISTRO' })
    P_FECHA_REG: Date
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(40, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE LC_SAE  CONFORMADA POR VALORES DE SAE ( TIPO_LC , ID_EVENTO Y ID_LOTE)' })
    P_LC_SAE: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(40, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE LC_BANCO CONFORMADA POR VALORES DEL  BANCO ( FECHA_VIGECIA, LC_SAE Y MONTO)' })
    P_LC_BANCO: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE TIPO DE PAGO' })
    P_TIPO_PAGO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(20, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE USUARIO QUE GENERA LC' })
    P_USER_GENERA: string
    //-----------------------------------------------------------------------------------------------------------------
    @Type(() => Date)
    @IsDate({ message: Message.ISDATE('$property') })
    @ApiProperty({ example: 'INDICADOR DE FECHA DE VIGENCIA' })
    P_FEC_VIGENCIA: Date
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @Max(999999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE MONTO PENA PARA EL CASO DE LC CON PAGO EXTEMPORANEO' })
    P_MONTO_PENA: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DEL ID_EVENTO' })
    P_IDEVENTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DEL ID_LOTE' })
    P_IDLOTE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE ID_CLIENTE' })
    P_IDCLIENTE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO.' })
    p_RESUL: string
    //-----------------------------------------------------------------------------------------------------------------
}
