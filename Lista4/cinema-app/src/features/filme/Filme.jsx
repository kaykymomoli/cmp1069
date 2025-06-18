import { useState } from "react";
import FormFilme from "./components/FormFilme";
import TabelaFilmes from "./components/TabelaFilmes";
import { getFilmes, salvarFilmes } from "./services/filmeStorage";

export default function Filme() {
  const [filmes, setFilmes] = useState(getFilmes());
  const [editando, setEditando] = useState(null);

  function salvar(filme) {
    const lista = [...filmes];
    if (editando !== null) {
      lista[editando] = filme;
      setEditando(null);
    } else {
      lista.push(filme);
    }
    setFilmes(lista);
    salvarFilmes(lista);
  }

  function excluir(index) {
    if (!window.confirm("Deseja excluir?")) return;
    const novaLista = filmes.filter((_, i) => i !== index);
    setFilmes(novaLista);
    salvarFilmes(novaLista);
  }

  function editar(index) {
    setEditando(index);
  }

  return (
    <div className="container mt-4">
      <h2>Cadastro de Filmes</h2>
      <FormFilme onSalvar={salvar} filmeEmEdicao={filmes[editando]} />
      <TabelaFilmes filmes={filmes} onEditar={editar} onExcluir={excluir} />
    </div>
  );
}
