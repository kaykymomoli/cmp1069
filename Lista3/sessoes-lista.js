document.addEventListener("DOMContentLoaded", () => {
    const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
    const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    const salas = JSON.parse(localStorage.getItem("salas")) || [];
    const container = document.getElementById("lista-sessoes");
  
    if (sessoes.length === 0) {
      container.innerHTML = "<p class='text-muted'>Nenhuma sessão disponível.</p>";
      return;
    }
  
    sessoes.forEach((sessao, index) => {
      const filme = filmes[sessao.filmeIndex]?.titulo || "[Filme removido]";
      const sala = salas[sessao.salaIndex]?.nome || "[Sala removida]";
  
      const col = document.createElement("div");
      col.className = "col-md-4";
  
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${filme}</h5>
            <p class="card-text"><strong>Sala:</strong> ${sala}</p>
            <p class="card-text"><strong>Data e Hora:</strong> ${sessao.dataHora}</p>
            <p class="card-text"><strong>Preço:</strong> R$ ${sessao.preco.toFixed(2)}</p>
            <a href="venda-ingressos.html?sessao=${index}" class="btn btn-outline-primary">Comprar Ingresso</a>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
});
  