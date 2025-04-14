function salvarEmStorage(chave, objeto) {
    const lista = JSON.parse(localStorage.getItem(chave)) || [];
    lista.push(objeto);
    localStorage.setItem(chave, JSON.stringify(lista));
}
  
document.getElementById("form-filme").addEventListener("submit", function(event) {
    event.preventDefault();
    const filme = {
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
      genero: document.getElementById("genero").value,
      classificacao: document.getElementById("classificacao").value,
      duracao: parseInt(document.getElementById("duracao").value),
      estreia: document.getElementById("estreia").value
    };
    salvarEmStorage("filmes", filme);
    alert("Filme salvo com sucesso!");
    this.reset();
});
  