import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FilmeService } from './filme.service';

@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  create(@Body() filmeData) {
    return this.filmeService.create(filmeData);
  }

  @Get()
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const filmeId = parseInt(id, 10);
    return this.filmeService.findOne(filmeId);
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() filmeData) {
    const filmeId = parseInt(id, 10);
    return this.filmeService.update(filmeId, filmeData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const filmeId = parseInt(id, 10);
    return this.filmeService.remove(filmeId);
  }
}
