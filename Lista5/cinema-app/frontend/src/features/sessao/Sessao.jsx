import { useEffect, useState } from "react";
import { getSessoes, createSessao, updateSessao, deleteSessao } from "../../services/api"; // Funções para interagir com o backend
import FormSessao from "./components/FormSessao";
import TabelaSessao from "./components/TabelaSessao";

export default function Sessao() {
  const [sessoes, setSessoes] = useState([]);
  const [editando, setEditando] = useState(null);

  // Carregar sessões ao iniciar o componente
  useEffect(() => {
    const fetchSessoes = async () => {
      try {
        const dados = await getSessoes();  // Pega as sessões do backend
        setSessoes(dados);  // Atualiza o estado com as sessões
      } catch (error) {
        console.error("Erro ao carregar sessões", error);
      }
    };

    fetchSessoes();  // Chama a função para buscar as sessões ao iniciar o componente
  }, []);

  // Função para salvar ou editar sessão
  const salvar = async (sessao) => {
    if (editando !== null) {
      // Atualizar sessão
      try {
        await updateSessao(sessao.id, sessao);  // Envia a atualização para o backend
        const sessoesAtualizadas = sessoes.map((s) =>
          s.id === sessao.id ? sessao : s
        );
        setSessoes(sessoesAtualizadas);  // Atualiza a lista de sessões
        setEditando(null);  // Limpa o estado de edição
      } catch (error) {
        console.error("Erro ao atualizar sessão", error);
      }
    } else {
      // Criar nova sessão
      try {
        const sessaoCriada = await createSessao(sessao);  // Envia a nova sessão para o backend
        setSessoes([...sessoes, sessaoCriada]);  // Atualiza a lista de sessões com a nova sessão
      } catch (error) {
        console.error("Erro ao criar sessão", error);
      }
    }
  };

  // Função para excluir uma sessão
  const excluir = async (id) => {
    if (!window.confirm("Deseja excluir esta sessão?")) return;

    try {
      await deleteSessao(id);  // Exclui a sessão no backend
      const sessoesAtualizadas = sessoes.filter((sessao) => sessao.id !== id);  // Atualiza a lista removendo a sessão
      setSessoes(sessoesAtualizadas);  // Atualiza o estado de sessões
    } catch (error) {
      console.error("Erro ao excluir sessão", error);
    }
  };

  // Função para editar uma sessão
  const editar = (id) => {
    setEditando(id);  // Marca a sessão que está sendo editada
  };

  return (
    <div className="container mt-4">
      <h2>Cadastro de Sessões</h2>
      <FormSessao onSalvar={salvar} sessaoEmEdicao={sessoes.find((s) => s.id === editando)} />
      <TabelaSessao sessoes={sessoes} onEditar={editar} onExcluir={excluir} />
    </div>
  );
}
