import { ApiProperty } from "@nestjs/swagger";
import {
    IsString, MaxLength, IsNumber, IsInt, Max
} from 'class-validator';
import { Message } from "src/shared/message";

export class PObtDatlcDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(20, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'IDENTIFICADOR DEL PARÁMETRO.' })
    p_PARAMETRO: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @IsInt({ message: Message.ISINT('$property') })
    @Max(99, { message: Message.MAX('$property', '$constraint1') })
    @ApiProperty({ example: 'IDENTIFICADOR DEL TIPO DE EVENTO.' })
    p_ID_TPEVENTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'DIRECCIÓN DEL EVENTO M MUEBLES, I INMUEBLES. ' })
    p_DIRECCION: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @MaxLength(20, { message: Message.MAXLENGTH('$property', '$constraint1') })
    @ApiProperty({ example: 'INDICADOR DE TIPO DE MOVIMIENTO, C CHEQUE, T TRANSFERENCIA.' })
    p_IND_MOV: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'NÚMERO DE DÍAS MÁXIMOS PARA EL PAGO DE LA LÍNEA DE CAPTURA A PARTIR DEL LA FECHA BASE.' })
    p_NUM_DIAS: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'TIPO DE LC A GENERAR.' })
    p_TIPO_LC: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'IDENTIFICADOR DE LA TABLA EN LA CUAL SE GENERA EL REGISTRO DE LA LC. LC COMER_DET_LC, RG COMER_REF_GARANTIAS.' })
    p_TABLA_APLICA: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE FECHA BASE PARA CALCULO DE FECHA VIGENCIA C FECHA CIERRE, F FECHA FALLO, N FECHA NOTIFICACIÓN.' })
    p_IND_FEC: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'INDICADOR DE MONTO A UTILIZAR,  G GARANTIA_ASIG, L MONTO A LIQUIDAR.' })
    p_IND_MONTO: string
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO.' })
    p_RESUL: string
    //-----------------------------------------------------------------------------------------------------------------
}
