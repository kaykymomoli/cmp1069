import { useState, useEffect } from "react";
import { createSala, updateSala } from "../../../services/api"; // Caminho corrigido para o arquivo api.js

export default function FormSala({ onSalvar, salaEmEdicao }) {
  const [form, setForm] = useState({ nome: "", capacidade: "", tipo: "" });
  const [erro, setErro] = useState(""); // Para exibir mensagens de erro

  useEffect(() => {
    if (salaEmEdicao) {
      // Quando houver uma sala para editar, preenche o formulário
      setForm(salaEmEdicao);
    }
  }, [salaEmEdicao]);

  // Atualiza o estado do formulário conforme os dados do input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Função chamada quando o formulário é submetido
  async function handleSubmit(e) {
  e.preventDefault();

  if (!form.nome || !form.capacidade || !form.tipo) {
    alert("Por favor, preencha todos os campos");
    return; // Não envia a requisição se algum campo estiver vazio
  }

  if (salaEmEdicao) {
    // Atualizar sala
    try {
      await updateSala(salaEmEdicao.id, form);  // Envia a atualização para o backend
      onSalvar(form);  // Atualiza a lista de salas no componente pai
    } catch (error) {
      console.error("Erro ao atualizar sala", error);
    }
  } else {
    // Criar nova sala
    try {
      await createSala(form);  // Envia a nova sala para o backend
      onSalvar(form);  // Atualiza a lista de salas no componente pai
    } catch (error) {
      console.error("Erro ao criar sala", error);
    }
  }

  setForm({ nome: "", capacidade: "", tipo: "" });  // Limpa o formulário após salvar
}


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <input
          name="nome"
          className="form-control"
          placeholder="Nome da Sala"
          value={form.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-2">
        <input
          name="capacidade"
          type="number"
          className="form-control"
          placeholder="Capacidade"
          value={form.capacidade}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <select
          name="tipo"
          className="form-select"
          value={form.tipo}
          onChange={handleChange}
          required
        >
          <option value="">Tipo</option>
          <option>2D</option>
          <option>3D</option>
          <option>IMAX</option>
        </select>
      </div>

      {/* Exibe erro caso tenha algum */}
      {erro && <div className="alert alert-danger">{erro}</div>}

      <button type="submit" className="btn btn-primary">
        {salaEmEdicao ? "Atualizar Sala" : "Criar Sala"}
      </button>
    </form>
  );
}
