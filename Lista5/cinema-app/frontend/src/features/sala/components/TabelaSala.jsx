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
        {salas.map((sala) => (
          <tr key={sala.id}> 
            <td>{sala.nome}</td>
            <td>{sala.capacidade}</td>
            <td>{sala.tipo}</td>
            <td>
              <button className="btn btn-warning btn-sm me-1" onClick={() => onEditar(sala.id)}>Editar</button>
              <button className="btn btn-danger btn-sm" onClick={() => onExcluir(sala.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
