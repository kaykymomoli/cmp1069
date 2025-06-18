import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  // Criação de um novo filme
  async create(filmeData) {
    // Verifique e converta a data para o formato correto
    const data = filmeData.estreia ? new Date(filmeData.estreia) : null;
    filmeData.estreia = data;

    return this.prisma.filme.create({
      data: {
        titulo: filmeData.titulo,
        descricao: filmeData.descricao,
        genero: filmeData.genero,
        classificacao: filmeData.classificacao,
        duracao: parseInt(filmeData.duracao, 10),
        estreia: filmeData.estreia,  // Aqui estamos passando a data no formato correto
      },
    });
  }

  // Listagem de todos os filmes
  async findAll() {
    return this.prisma.filme.findMany();
  }

  // Encontrar um filme por ID
  async findOne(id: number) {
    return this.prisma.filme.findUnique({
      where: { id },
    });
  }

  // Atualizar um filme
  async update(id: number, filmeData) {
    const data = filmeData.estreia ? new Date(filmeData.estreia) : null;
    filmeData.estreia = data;

    return this.prisma.filme.update({
      where: { id },
      data: {
        titulo: filmeData.titulo,
        descricao: filmeData.descricao,
        genero: filmeData.genero,
        classificacao: filmeData.classificacao,
        duracao: parseInt(filmeData.duracao, 10),
        estreia: filmeData.estreia,
      },
    });
  }

  // Deletar um filme
  async remove(id: number) {
    return this.prisma.filme.delete({
      where: { id },
    });
  }
}