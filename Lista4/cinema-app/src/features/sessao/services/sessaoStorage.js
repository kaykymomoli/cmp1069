const CHAVE = "sessoes";

export function getSessoes() {
  return JSON.parse(localStorage.getItem(CHAVE)) || [];
}

export function salvarSessoes(sessoes) {
  localStorage.setItem(CHAVE, JSON.stringify(sessoes));
}
