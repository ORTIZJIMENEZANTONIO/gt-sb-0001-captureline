import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class PGenAvisoVenLcsDto {
    //-----------------------------------------------------------------------------------------------------------------
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({ example: 'MENSAJE RESULTANTE DEL PROCESO' })
    p_RESUL: string
    //-----------------------------------------------------------------------------------------------------------------
}
