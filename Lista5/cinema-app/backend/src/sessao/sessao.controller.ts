import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SessaoService } from './sessao.service';

@Controller('sessoes')  // Rota para gerenciar sessões
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  create(@Body() sessaoData) {
    return this.sessaoService.create(sessaoData);
  }

  @Get()
  findAll() {
    return this.sessaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sessaoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() sessaoData) {
    return this.sessaoService.update(id, sessaoData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sessaoService.remove(id);
  }
}
