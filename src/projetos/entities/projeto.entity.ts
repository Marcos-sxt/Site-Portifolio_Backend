import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_projetos' })
export class Projeto {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @MaxLength(100)
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  @ApiProperty()
  descricao: string;

  @Column({ length: 1000, nullable: true })
  @ApiProperty()
  foto: string;

  @Column({ length: 1000, nullable: true })
  @ApiProperty()
  linkDoProjeto: string;
}
