import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./features/home/Home";
import Filme from "./features/filme/Filme";
import Sala from "./features/sala/Sala";
import Sessao from "./features/sessao/Sessao";
import Vendas from "./features/ingresso/Vendas";
import Listar from "./features/listaSessao/ListarSessoes";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filme />} />
          <Route path="/salas" element={<Sala />} />
          <Route path="/sessoes" element={<Sessao />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/listar" element={<Listar />} />
        </Routes>
      </div>
    </>
  );
}
