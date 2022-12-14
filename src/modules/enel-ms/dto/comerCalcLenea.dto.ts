import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class ComerCalcLeneaDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    PEVENTO: number
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    PCLIENTEBMX: string
}
