export default function TabelaSessao({ sessoes, onEditar, onExcluir }) {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Sala</th>
          <th>Filme</th>
          <th>Data e Hora</th>
          <th>Preço</th>
          <th>Idioma</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {sessoes.map((sessao) => (
          <tr key={sessao.id}>
            <td>{sessao.sala.nome}</td> {/* Exibe o nome da sala */}
            <td>{sessao.filme.titulo}</td> {/* Exibe o título do filme */}
            <td>{new Date(sessao.dataHora).toLocaleString()}</td> {/* Formata a data e hora */}
            <td>{sessao.preco}</td>
            <td>{sessao.idioma}</td>
            <td>
              <button className="btn btn-warning btn-sm me-1" onClick={() => onEditar(sessao.id)}>Editar</button>
              <button className="btn btn-danger btn-sm" onClick={() => onExcluir(sessao.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
