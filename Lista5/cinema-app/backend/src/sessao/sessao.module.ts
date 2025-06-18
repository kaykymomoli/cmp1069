import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SessaoService } from './sessao.service';
import { SessaoController } from './sessao.controller';

@Module({
  providers: [SessaoService, PrismaService],  // Define os providers
  controllers: [SessaoController],  // Define o controlador
})
export class SessaoModule {}
