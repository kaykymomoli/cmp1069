import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Cinema</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/filmes">Filmes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/salas">Salas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sessoes">Sessões</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/vendas">Vendas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/listar">Listar Sessões</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}