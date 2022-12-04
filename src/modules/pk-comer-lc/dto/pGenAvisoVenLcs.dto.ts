import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsString, MaxLength, IsDate, IsNumber, Max, IsInt
} from 'class-validator';
import { Message } from "src/shared/message";

export class PGenAvisoVenLcsDto {
    //-----------------------------------------------------------------------------------------------------------------
    p_RESUL: string
    //-----------------------------------------------------------------------------------------------------------------
}
