function carregarSessoes() {
    const select = document.getElementById("sessao");
    const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
    const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    const salas = JSON.parse(localStorage.getItem("salas")) || [];
  
    sessoes.forEach((sessao, index) => {
      const option = document.createElement("option");
      const filme = filmes[sessao.filmeIndex]?.titulo || "[Filme removido]";
      const sala = salas[sessao.salaIndex]?.nome || "[Sala removida]";
      option.value = index;
      option.textContent = `${filme} - ${sala} - ${sessao.dataHora}`;
      select.appendChild(option);
    });
}
  
function salvarEmStorage(chave, objeto) {
    const lista = JSON.parse(localStorage.getItem(chave)) || [];
    lista.push(objeto);
    localStorage.setItem(chave, JSON.stringify(lista));
}
  
document.addEventListener("DOMContentLoaded", carregarSessoes);
  
document.getElementById("form-ingresso").addEventListener("submit", function(event) {
    event.preventDefault();
    const ingresso = {
      sessaoIndex: parseInt(document.getElementById("sessao").value),
      cliente: document.getElementById("cliente").value,
      cpf: document.getElementById("cpf").value,
      assento: document.getElementById("assento").value,
      pagamento: document.getElementById("pagamento").value
    };
    salvarEmStorage("ingressos", ingresso);
    alert("Venda realizada com sucesso!");
    this.reset();
});
  