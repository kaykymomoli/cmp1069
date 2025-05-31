import { useState } from "react";
import FormVenda from "./components/FormVenda";
import { getIngressos, salvarIngressos } from "./services/ingressoStorage";
import { getSessoes } from "../sessao/services/sessaoStorage";
import { getFilmes } from "../filme/services/filmeStorage";
import { getSalas } from "../sala/services/salaStorage";

export default function Vendas() {
  const [ingressos, setIngressos] = useState(getIngressos());
  const sessoes = getSessoes();
  const filmes = getFilmes();
  const salas = getSalas();

  function salvarIngresso(novo) {
    const lista = [...ingressos, novo];
    setIngressos(lista);
    salvarIngressos(lista);
    alert("Venda registrada com sucesso!");
  }

  return (
    <div className="container mt-4">
      <h2>Venda de Ingressos</h2>
      <FormVenda sessoes={sessoes} filmes={filmes} salas={salas} onSalvar={salvarIngresso} />
    </div>
  );
}
