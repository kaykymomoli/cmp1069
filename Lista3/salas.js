function salvarEmStorage(chave, objeto) {
    const lista = JSON.parse(localStorage.getItem(chave)) || [];
    lista.push(objeto);
    localStorage.setItem(chave, JSON.stringify(lista));
}
  
document.getElementById("form-sala").addEventListener("submit", function(event) {
    event.preventDefault();
    const sala = {
      nome: document.getElementById("nome").value,
      capacidade: parseInt(document.getElementById("capacidade").value),
      tipo: document.getElementById("tipo").value
    };
    salvarEmStorage("salas", sala);
    alert("Sala salva com sucesso!");
    this.reset();
});
  