function carregarOpcoes(chave, selectId, campoTexto) {
    const select = document.getElementById(selectId);
    const dados = JSON.parse(localStorage.getItem(chave)) || [];
    dados.forEach((item, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = item[campoTexto];
      select.appendChild(option);
    });
}
  
function salvarEmStorage(chave, objeto) {
    const lista = JSON.parse(localStorage.getItem(chave)) || [];
    lista.push(objeto);
    localStorage.setItem(chave, JSON.stringify(lista));
}
  
document.addEventListener("DOMContentLoaded", () => {
    carregarOpcoes("filmes", "filme", "titulo");
    carregarOpcoes("salas", "sala", "nome");
});
  
document.getElementById("form-sessao").addEventListener("submit", function(event) {
    event.preventDefault();
    const sessao = {
      filmeIndex: parseInt(document.getElementById("filme").value),
      salaIndex: parseInt(document.getElementById("sala").value),
      dataHora: document.getElementById("dataHora").value,
      preco: parseFloat(document.getElementById("preco").value),
      idioma: document.getElementById("idioma").value,
      formato: document.getElementById("formato").value
    };
    salvarEmStorage("sessoes", sessao);
    alert("Sessão salva com sucesso!");
    this.reset();
});
  