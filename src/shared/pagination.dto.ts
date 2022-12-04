import { IsNumber, IsPositive, IsOptional } from 'class-validator';
import { Type } from "class-transformer";
export class PaginationDto {
    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    inicio: number;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    @IsOptional()
    pageSize: number;

    @IsOptional()
    text?: string | null
}   
