export default function TabelaFilmes({ filmes, onEditar, onExcluir }) {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Título</th>
          <th>Gênero</th>
          <th>Classificação</th>
          <th>Duração</th>
          <th>Estreia</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {filmes.map((f, i) => (
          <tr key={i}>
            <td>{f.titulo}</td>
            <td>{f.genero}</td>
            <td>{f.classificacao}</td>
            <td>{f.duracao} min</td>
            <td>{f.estreia}</td>
            <td>
              <button className="btn btn-warning btn-sm me-1" onClick={() => onEditar(i)}>Editar</button>
              <button className="btn btn-danger btn-sm" onClick={() => onExcluir(i)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
