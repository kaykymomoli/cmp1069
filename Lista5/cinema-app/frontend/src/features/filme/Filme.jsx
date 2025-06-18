import { useEffect, useState } from "react";
import FormFilme from "./components/FormFilme";
import TabelaFilmes from "./components/TabelaFilmes";
import { getFilmes, createFilme, updateFilme, deleteFilme } from "../../services/api"; // Importando funções de API

export default function Filme() {
  const [filmes, setFilmes] = useState([]);
  const [editando, setEditando] = useState(null);

  // Carregar filmes ao iniciar o componente
  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const dados = await getFilmes();  // Pega os filmes do backend
        setFilmes(dados);  // Atualiza o estado com os filmes
      } catch (error) {
        console.error("Erro ao carregar filmes", error);  // Exibe erro no console se a requisição falhar
      }
    };

    fetchFilmes();  // Chama a função para buscar filmes ao iniciar o componente
  }, []);

  // Função para salvar ou editar filme
  const salvar = async (filme) => {
    if (editando !== null) {
      // Atualizar filme
      try {
        await updateFilme(filme.id, filme); // Atualiza o filme no backend
        const filmesAtualizados = filmes.map((f) =>
          f.id === filme.id ? filme : f
        );
        setFilmes(filmesAtualizados);  // Atualiza a lista de filmes
        setEditando(null);  // Limpa o estado de edição
      } catch (error) {
        console.error("Erro ao atualizar filme", error);
      }
    } else {
      // Criar novo filme
      try {
        const filmeCriado = await createFilme(filme); // Cria o filme no backend
        setFilmes([...filmes, filmeCriado]);  // Atualiza a lista de filmes com o novo filme
      } catch (error) {
        console.error("Erro ao criar filme", error);
      }
    }
  };

  // Função para excluir um filme
  const excluir = async (id) => {
    if (!window.confirm("Deseja excluir?")) return;

    try {
      await deleteFilme(id); // Exclui o filme no backend
      const filmesAtualizados = filmes.filter((filme) => filme.id !== id);
      setFilmes(filmesAtualizados);  // Atualiza a lista de filmes após excluir
    } catch (error) {
      console.error("Erro ao excluir filme", error);
    }
  };

  // Função para editar um filme
  const editar = (id) => {
    setEditando(id);  // Define qual filme está sendo editado
  };

  return (
    <div className="container mt-4">
      <h2>Cadastro de Filmes</h2>
      <FormFilme onSalvar={salvar} filmeEmEdicao={filmes.find(f => f.id === editando)} />
      <TabelaFilmes filmes={filmes} onEditar={editar} onExcluir={excluir} />
    </div>
  );
}
