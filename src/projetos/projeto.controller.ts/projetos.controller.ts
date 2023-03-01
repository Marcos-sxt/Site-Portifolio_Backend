/* eslint-disable @typescript-eslint/no-unused-vars */
import { Projeto } from './../entities/projeto.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ProjetosService } from '../projeto.service.ts/projetos.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Projetos')
@Controller('/projetos')
export class ProjetosController {
  constructor(private readonly projetosService: ProjetosService) {}

  @Post()
  create(@Body() projeto: Projeto) {
    return this.projetosService.create(projeto);
  }

  @Get()
  findAll() {
    return this.projetosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetosService.findById(+id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() projeto: Projeto): Promise<Projeto> {
    return this.projetosService.update(projeto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.projetosService.delete(id);
  }
}
