document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("lista-sessoes");

    const sessoes = JSON.parse(localStorage.getItem("sessoes") || "[]");
    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");

    sessoes.forEach((sessao, i) => {
        const filme = filmes[sessao.filme] || {};
        const sala = salas[sessao.sala] || {};

        const card = document.createElement("div");
        card.className = "col-md-6 col-lg-4 mb-4";

        card.innerHTML = `
            <div class="card h-100 shadow">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${filme.titulo || "Filme"}</h5>
                    <p class="card-text">
                        <strong>Sala:</strong> ${sala.nome || "?"} <br>
                        <strong>Data e Hora:</strong> ${sessao.dataHora} <br>
                        <strong>Preço:</strong> R$ ${parseFloat(sessao.preco).toFixed(2)} <br>
                        <strong>Idioma:</strong> ${sessao.idioma} <br>
                        <strong>Formato:</strong> ${sessao.formato}
                    </p>
                    <a href="venda-ingressos.html?sessao=${i}" class="btn btn-primary mt-auto">Comprar Ingresso</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
});
