/* eslint-disable prefer-const */
import { Projeto } from './../entities/projeto.entity';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProjetosService {
  constructor(
    @InjectRepository(Projeto)
    private ProjetoRepository: Repository<Projeto>,
  ) {}

  async create(projeto: Projeto): Promise<Projeto> {
    return await this.ProjetoRepository.save(projeto);
  }

  async findAll(): Promise<Projeto[]> {
    return await this.ProjetoRepository.find({});
  }

  async findById(id: number): Promise<Projeto> {
    let projeto = await this.ProjetoRepository.findOne({
      where: {
        id,
      },
    });

    if (!projeto)
      throw new HttpException('Projeto não existe', HttpStatus.NOT_FOUND);

    return projeto;
  }

  async update(projeto: Projeto): Promise<Projeto> {
    let buscarProjeto = await this.findById(projeto.id);

    if (!buscarProjeto || !projeto.id)
      throw new HttpException('Projeto não existe', HttpStatus.NOT_FOUND);

    return await this.ProjetoRepository.save(projeto);
  }

  async delete(id: number): Promise<DeleteResult> {
    let buscarProjeto = await this.findById(id);

    if (!buscarProjeto)
      throw new HttpException('Projeto nâo encontrada', HttpStatus.NOT_FOUND);

    return await this.ProjetoRepository.delete(id);
  }
}
