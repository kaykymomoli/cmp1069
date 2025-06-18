import { useState } from "react";
import FormSessao from "./components/FormSessao";
import TabelaSessao from "./components/TabelaSessao";
import { getSessoes, salvarSessoes } from "./services/sessaoStorage";
import { getFilmes } from "../filme/services/filmeStorage";
import { getSalas } from "../sala/services/salaStorage";

export default function Sessao() {
  const [sessoes, setSessoes] = useState(getSessoes());
  const [editando, setEditando] = useState(null);
  const filmes = getFilmes();
  const salas = getSalas();

  function salvar(sessao) {
    const lista = [...sessoes];
    if (editando !== null) {
      lista[editando] = sessao;
      setEditando(null);
    } else {
      lista.push(sessao);
    }
    setSessoes(lista);
    salvarSessoes(lista);
  }

  function excluir(index) {
    if (!window.confirm("Excluir sessão?")) return;
    const novaLista = sessoes.filter((_, i) => i !== index);
    setSessoes(novaLista);
    salvarSessoes(novaLista);
  }

  function editar(index) {
    setEditando(index);
  }

  return (
    <div className="container mt-4">
      <h2>Cadastro de Sessões</h2>
      <FormSessao onSalvar={salvar} sessaoEmEdicao={sessoes[editando]} filmes={filmes} salas={salas} />
      <TabelaSessao sessoes={sessoes} filmes={filmes} salas={salas} onEditar={editar} onExcluir={excluir} />
    </div>
  );
}