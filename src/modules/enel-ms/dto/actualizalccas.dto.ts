import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class ActualizalccasDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    ID_EVENTO_IN: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    ID_CLIENTE_IN: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    ID_LOTE_IN: number
}