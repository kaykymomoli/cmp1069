import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {}

  // Criar uma nova sala
  async create(salaData) {
    return this.prisma.sala.create({
      data: {
        nome: salaData.nome,         // Usando o valor dinâmico do frontend
        capacidade: parseInt(salaData.capacidade), // Garantir que seja um número
        tipo: salaData.tipo,         // Usando o valor dinâmico do frontend
      },
    });
  }


  // Listar todas as salas
  async findAll() {
    return this.prisma.sala.findMany();
  }

  // Encontrar uma sala por ID
  async findOne(id: number) {
    return this.prisma.sala.findUnique({
      where: { id },
    });
  }

  // Atualizar uma sala
  async update(id: number, salaData) {
    return this.prisma.sala.update({
      where: { id },
      data: {
        nome: salaData.nome,         // Usando o valor dinâmico do frontend
        capacidade: parseInt(salaData.capacidade), // Garantir que seja um número
        tipo: salaData.tipo,         // Usando o valor dinâmico do frontend
      },
    });
  }

  // Excluir uma sala
  async remove(id: number) {
    return this.prisma.sala.delete({
      where: { id },
    });
  }
}
