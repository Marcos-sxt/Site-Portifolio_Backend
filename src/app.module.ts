import { ProjetosModule } from './projetos/projetos.module';
import { Projeto } from './projetos/entities/projeto.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_siteportifolio',
      entities: [Projeto],
      synchronize: true,
    }),
    ProjetosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
