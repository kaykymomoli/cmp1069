import { useState, useEffect } from "react";
import { getSalas, getFilmes, createSessao } from "../../../services/api"; // Funções para interagir com o backend

export default function FormSessao({ onSalvar, sessaoEmEdicao }) {
  const [form, setForm] = useState({
    salaId: "",
    filmeId: "",
    dataHora: "",
    preco: "",
    idioma: "",
  });
  const [salas, setSalas] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState(""); // Para exibir mensagens de erro

  useEffect(() => {
    const fetchSalasEFilmes = async () => {
      try {
        const salasDados = await getSalas();
        const filmesDados = await getFilmes();
        setSalas(salasDados);  // Preenche as salas no estado
        setFilmes(filmesDados);  // Preenche os filmes no estado

        if (sessaoEmEdicao) {
          // Preenche os dados da sessão em edição no formulário
          setForm(sessaoEmEdicao);
        }
      } catch (error) {
        console.error("Erro ao carregar salas e filmes", error);
      }
    };

    fetchSalasEFilmes();
  }, [sessaoEmEdicao]);

  // Atualiza o estado do formulário conforme os dados do input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Função chamada quando o formulário é submetido
  async function handleSubmit(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    if (!form.salaId || !form.filmeId || !form.dataHora || !form.preco || !form.idioma) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    setErro(""); // Limpa o erro se tudo estiver correto

    if (sessaoEmEdicao) {
      // Atualizar sessão
      await onSalvar(form);  // Chama a função de salvar no componente pai
    } else {
      // Criar nova sessão
      await onSalvar(form);  // Chama a função de salvar no componente pai
    }

    // Limpa o formulário após salvar ou atualizar
    setForm({ salaId: "", filmeId: "", dataHora: "", preco: "", idioma: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de Seleção para Sala */}
      <div className="form-group mb-2">
        <select
          name="salaId"
          className="form-control"
          value={form.salaId}
          onChange={handleChange}
          required
        >
          <option value="">Selecione a Sala</option>
          {salas.map((sala) => (
            <option key={sala.id} value={sala.id}>
              {sala.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Campo de Seleção para Filme */}
      <div className="form-group mb-2">
        <select
          name="filmeId"
          className="form-control"
          value={form.filmeId}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o Filme</option>
          {filmes.map((filme) => (
            <option key={filme.id} value={filme.id}>
              {filme.titulo}
            </option>
          ))}
        </select>
      </div>

      {/* Campo para Data e Hora */}
      <div className="form-group mb-2">
        <input
          name="dataHora"
          type="datetime-local"
          className="form-control"
          value={form.dataHora}
          onChange={handleChange}
          required
        />
      </div>

      {/* Campo para Preço */}
      <div className="form-group mb-2">
        <input
          name="preco"
          type="number"
          className="form-control"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          required
        />
      </div>

      {/* Campo para Idioma */}
      <div className="form-group mb-2">
        <input
          name="idioma"
          className="form-control"
          placeholder="Idioma"
          value={form.idioma}
          onChange={handleChange}
          required
        />
      </div>

      {/* Exibe erro caso tenha algum */}
      {erro && <div className="alert alert-danger">{erro}</div>}

      <button type="submit" className="btn btn-primary">
        {sessaoEmEdicao ? "Atualizar Sessão" : "Criar Sessão"}
      </button>
    </form>
  );
}
