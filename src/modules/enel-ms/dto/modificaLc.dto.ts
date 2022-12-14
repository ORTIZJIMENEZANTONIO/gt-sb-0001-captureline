import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class ModificaLcDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    ID_LC_IN: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    LC: number
}