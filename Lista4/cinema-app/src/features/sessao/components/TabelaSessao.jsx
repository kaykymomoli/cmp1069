export default function TabelaSessao({ sessoes, filmes, salas, onEditar, onExcluir }) {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Filme</th>
          <th>Sala</th>
          <th>Data</th>
          <th>Preço</th>
          <th>Idioma</th>
          <th>Formato</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {sessoes.map((s, i) => (
          <tr key={i}>
            <td>{filmes[s.filme]?.titulo || "?"}</td>
            <td>{salas[s.sala]?.nome || "?"}</td>
            <td>{s.dataHora}</td>
            <td>R$ {parseFloat(s.preco).toFixed(2)}</td>
            <td>{s.idioma}</td>
            <td>{s.formato}</td>
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
