import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class SpGenLcDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDENTIFICADOR DEL ID_LOTE' })
    P_ID_LOTE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(9999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'INDENTIFICADOR DEL ID_CLIENTE' })
    P_ID_CLIENTE: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(20, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'IDENTIFICADOR DEL PARAMETRO DE TIPO DE LC' })
    P_PARAMETRO: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @Max(99999999999999999999, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'IDENTIFICADOR DE MONTO DE LC PARA EL CASO LAS QUE SE GENEREN POR EL PORTAL (PAGO PARCIAL)' })
    P_MONTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(20, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'IDENTIFICADOR DE MOVIMIENTO  CHEQUE O TRANSFERENCIA' })
    P_IND_MOV: string
    //-----------------------------------------------------------------------------------------------------------------
    @Type(() => Date)
    @IsDate({ message: Message.ISDATE('$property') })
    @ApiProperty({ example: 'IDENTIFICADOR DE FECHA PARA EL CASO DE LOS PAGOS  PARCIALES' })
    P_FECVIGENCIA: Date
}
