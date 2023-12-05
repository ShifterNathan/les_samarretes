import { Exclude } from 'class-transformer';
import { ValidRoles } from '../../auth/interfaces/validRoles';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty({
    example: "cd533345-f1f3-48c9-a62e-7dc2da50c8f8",
    description: "User UUID",
    uniqueItems: true,
  })
  id: string;

  @Column("text")
  @ApiProperty({ example: "Juan", description: "Nombre del usuario"})
  firstName: string;

  @Column("text")
  @ApiProperty({ example: "Peréz", description: "Apellido del usuario" })
  lastName: string;

  @Column("text", { unique: true })
  @ApiProperty({ example: "juan@gmail.com", description: "Correo del usuario" })
  email: string;

  @Exclude()
  @Column("text")
  @ApiProperty({ example: "12345678", description: "Clave del usuario" })
  password: string;

  @Column('simple-array', { default: ValidRoles.user })
  @ApiProperty({ example: [ValidRoles.user, ValidRoles.userAdmin], description: "Array de roles del usuario", isArray: true})
  roles: string[];

  @CreateDateColumn()
  @ApiProperty({ example: "2023-05-02 11:29:38.927518", description: "Fecha de creación del usuario" })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: "2023-05-02 11:29:38.927518", description: "Fecha de actualización del usuario" })
  updatedAt?: Date;

  @DeleteDateColumn()
  @ApiProperty({ example: "2023-05-02 11:29:38.927518", description: "Fecha de eliminación del usuario" })
  deletedAt?: Date;
}
