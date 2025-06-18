import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  // Criar uma nova sessão
  async create(sessaoData) {
    return this.prisma.sessao.create({
      data: sessaoData,
    });
  }

  // Listar todas as sessões
  async findAll() {
    return this.prisma.sessao.findMany({
      include: {
        sala: true, // Inclui os dados da sala
        filme: true, // Inclui os dados do filme
      },
    });
  }

  // Encontrar uma sessão por ID
  async findOne(id: number) {
    return this.prisma.sessao.findUnique({
      where: { id },
      include: {
        sala: true,
        filme: true,
      },
    });
  }

  // Atualizar uma sessão
  async update(id: number, sessaoData) {
    return this.prisma.sessao.update({
      where: { id },
      data: sessaoData,
    });
  }

  // Excluir uma sessão
  async remove(id: number) {
    return this.prisma.sessao.delete({
      where: { id },
    });
  }
}