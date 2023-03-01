import { Projeto } from './entities/projeto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProjetosService } from './projeto.service.ts/projetos.service';
import { ProjetosController } from './projeto.controller.ts/projetos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Projeto])],
  controllers: [ProjetosController],
  providers: [ProjetosService],
  exports: [TypeOrmModule],
})
export class ProjetosModule {}
