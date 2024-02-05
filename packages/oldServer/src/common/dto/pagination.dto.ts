import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class PaginationDTO {
  @ApiPropertyOptional({
    default: 1,
    example: 5,
    description: "Select the page you want to see",
    // type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number;

  @IsBoolean()
  @IsOptional()
  withDeleted?: boolean;

  @IsOptional()
  @IsString()
  orderColumnName?: string;

  @IsOptional()
  @IsString()
  @IsIn(["ASC", "DESC"])
  orderBy?: "ASC" | "DESC";
}
