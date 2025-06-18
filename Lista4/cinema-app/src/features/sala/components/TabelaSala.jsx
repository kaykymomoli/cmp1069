export default function TabelaSala({ salas, onEditar, onExcluir }) {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Capacidade</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {salas.map((s, i) => (
          <tr key={i}>
            <td>{s.nome}</td>
            <td>{s.capacidade}</td>
            <td>{s.tipo}</td>
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