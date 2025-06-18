import { useEffect, useState } from "react";
import FormSala from "./components/FormSala";
import TabelaSala from "./components/TabelaSala";
import { getSalas, createSala, updateSala, deleteSala } from "../../services/api";  // Caminho correto

export default function Sala() {
  const [salas, setSalas] = useState([]);
  const [editando, setEditando] = useState(null);

  // Carregar salas ao iniciar o componente
  useEffect(() => {
    const fetchSalas = async () => {
      try {
        const dados = await getSalas();  // Pega as salas do backend
        setSalas(dados);  // Atualiza o estado com as salas
      } catch (error) {
        console.error("Erro ao carregar salas", error);
      }
    };

    fetchSalas();  // Chama a função para buscar as salas ao iniciar o componente
  }, []);

  // Função para salvar ou editar sala
  const salvar = async (sala) => {
    if (editando !== null) {
      // Atualizar sala
      try {
        await updateSala(sala.id, sala);  // Envia a atualização para o backend
        const salasAtualizadas = salas.map((s) =>
          s.id === sala.id ? sala : s
        );
        setSalas(salasAtualizadas);  // Atualiza a lista de salas
        setEditando(null);  // Limpa o estado de edição
      } catch (error) {
        console.error("Erro ao atualizar sala", error);
      }
    } else {
      // Criar nova sala
      try {
        const salaCriada = await createSala(sala);  // Envia a nova sala para o backend
        setSalas([...salas, salaCriada]);  // Atualiza a lista de salas com a nova sala
      } catch (error) {
        console.error("Erro ao criar sala", error);
      }
    }
  };

  // Função para excluir uma sala
  const excluir = async (id) => {
    if (!window.confirm("Deseja excluir esta sala?")) return;

    try {
      await deleteSala(id);  // Exclui a sala no backend
      const salasAtualizadas = salas.filter((sala) => sala.id !== id);  // Atualiza a lista removendo a sala
      setSalas(salasAtualizadas);  // Atualiza o estado de salas
    } catch (error) {
      console.error("Erro ao excluir sala", error);
    }
  };

  // Função para editar uma sala
  const editar = (id) => {
    setEditando(id);  // Marca a sala que está sendo editada
  };

  return (
    <div className="container mt-4">
      <h2>Cadastro de Salas</h2>
      <FormSala onSalvar={salvar} salaEmEdicao={salas.find((sala) => sala.id === editando)} />
      <TabelaSala salas={salas} onEditar={editar} onExcluir={excluir} />
    </div>
  );
}