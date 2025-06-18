import { Module } from '@nestjs/common';
import { FilmeModule } from './filme/filme.module';
import { AppController } from './app.controller';
import { SalaModule } from './sala/sala.module';

@Module({
  imports: [FilmeModule, SalaModule],
  controllers: [AppController],  // Adicione o AppController aqui
  providers: [],
})
export class AppModule {}