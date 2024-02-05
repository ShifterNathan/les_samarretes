import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/entities/user.entity";

export class ResponseDTO<T> {
  @ApiProperty({description: 'Mensaje de respuesta', example: 'Operación exitosa', required: false})
  message?: string;
  @ApiProperty({description: 'Código de respuesta', example: 200, required: false})
  total?: number;
  @ApiProperty({description: 'Datos de respuesta', required: false, type: User})
  data?: T;
  @ApiProperty({description: 'Pagina anterior', required: false})
  prev?: string;
  @ApiProperty({description: 'Pagina siguiente', required: false})
  next?: string;
}
