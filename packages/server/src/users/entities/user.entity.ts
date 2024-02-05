
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ValidRoles } from '../../auth/interfaces/validRoles';

@Schema()
export class User extends Document {

  @ApiProperty({ example: "Juan", description: "Nombre del usuario"})
  @Prop({ type: String, required: true })
  firstName: string;

  @ApiProperty({ example: "Peréz", description: "Apellido del usuario" })
  @Prop({ type: String, required: true })
  lastName: string;

  @ApiProperty({ example: "juan@gmail.com", description: "Correo del usuario" })
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Exclude()
  @ApiProperty({ example: "12345678", description: "Clave del usuario" })
  @Prop({ type: String, required: true })
  password: string;

  @ApiProperty({ example: [ValidRoles.user, ValidRoles.userAdmin], description: "Array de roles del usuario", isArray: true})
  @Prop({ type: [String], default: [ValidRoles.user] })
  roles: string[];

  @ApiProperty({ example: "2023-05-02 11:29:38.927518", description: "Fecha de creación del usuario" })
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @ApiProperty({ example: "2023-05-02 11:29:38.927518", description: "Fecha de actualización del usuario" })
  @Prop({ type: Date, default: Date.now })
  updatedAt?: Date;

  @ApiProperty({ example: "2023-05-02 11:29:38.927518", description: "Fecha de eliminación del usuario" })
  @Prop({ type: Date })
  deletedAt?: Date;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);