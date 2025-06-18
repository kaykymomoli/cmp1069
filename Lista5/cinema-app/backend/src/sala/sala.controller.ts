import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SalaService } from './sala.service';

@Controller('salas')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  async create(@Body() salaData) {
    return this.salaService.create(salaData);
  }

  @Get()
  async findAll() {
    return this.salaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const salaId = parseInt(id, 10);
    return this.salaService.findOne(salaId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() salaData) {
    const salaId = parseInt(id, 10);
    return this.salaService.update(salaId, salaData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const salaId = parseInt(id, 10);
    return this.salaService.remove(salaId);
  }
}
