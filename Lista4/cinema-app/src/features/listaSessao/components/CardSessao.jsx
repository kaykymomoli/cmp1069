import { useNavigate } from "react-router-dom";

export default function CardSessao({ sessao, filme, sala, index }) {
  const navigate = useNavigate();

  function irParaVenda() {
    navigate(`/vendas?sessao=${index}`);
  }

  if (!filme || !sala) return null;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{filme.titulo}</h5>
          <p className="card-text">
            <strong>Sala:</strong> {sala.nome}<br />
            <strong>Data:</strong> {sessao.dataHora}<br />
            <strong>Preço:</strong> R$ {parseFloat(sessao.preco).toFixed(2)}<br />
            <strong>Idioma:</strong> {sessao.idioma}<br />
            <strong>Formato:</strong> {sessao.formato}
          </p>
          <button className="btn btn-primary mt-auto" onClick={irParaVenda}>
            Comprar Ingresso
          </button>
        </div>
      </div>
    </div>
  );
}
