import { useState } from "react";
import FormSala from "./components/FormSala";
import TabelaSala from "./components/TabelaSala";
import { getSalas, salvarSalas } from "./services/salaStorage";

export default function Sala() {
  const [salas, setSalas] = useState(getSalas());
  const [editando, setEditando] = useState(null);

  function salvar(sala) {
    const lista = [...salas];
    if (editando !== null) {
      lista[editando] = sala;
      setEditando(null);
    } else {
      lista.push(sala);
    }
    setSalas(lista);
    salvarSalas(lista);
  }

  function excluir(index) {
    if (!window.confirm("Excluir esta sala?")) return;
    const novaLista = salas.filter((_, i) => i !== index);
    setSalas(novaLista);
    salvarSalas(novaLista);
  }

  function editar(index) {
    setEditando(index);
  }

  return (
    <div className="container mt-4">
      <h2>Cadastro de Salas</h2>
      <FormSala onSalvar={salvar} salaEmEdicao={salas[editando]} />
      <TabelaSala salas={salas} onEditar={editar} onExcluir={excluir} />
    </div>
  );
}