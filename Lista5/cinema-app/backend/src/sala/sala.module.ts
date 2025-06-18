import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [SalaService, PrismaService],
  controllers: [SalaController],
})
export class SalaModule {}