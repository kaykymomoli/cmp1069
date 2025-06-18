import { Module } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { FilmeController } from './filme.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  providers: [FilmeService, PrismaService],
  controllers: [FilmeController],
})
export class FilmeModule {}
