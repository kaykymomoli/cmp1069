const CHAVE = "filmes";

export function getFilmes() {
  return JSON.parse(localStorage.getItem(CHAVE)) || [];
}

export function salvarFilmes(filmes) {
  localStorage.setItem(CHAVE, JSON.stringify(filmes));
}
