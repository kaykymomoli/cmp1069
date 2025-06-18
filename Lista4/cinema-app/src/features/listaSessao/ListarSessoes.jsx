import CardSessao from "./components/CardSessao";
import { getSessoes } from "../sessao/services/sessaoStorage";
import { getFilmes } from "../filme/services/filmeStorage";
import { getSalas } from "../sala/services/salaStorage";

export default function ListarSessoes() {
  const sessoes = getSessoes();
  const filmes = getFilmes();
  const salas = getSalas();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Sessões Disponíveis</h2>
      <div className="row">
        {sessoes.map((sessao, i) => (
          <CardSessao
            key={i}
            index={i}
            sessao={sessao}
            filme={filmes[sessao.filme]}
            sala={salas[sessao.sala]}
          />
        ))}

      </div>
    </div>
  );
}
