const CHAVE = "salas";

export function getSalas() {
  return JSON.parse(localStorage.getItem(CHAVE)) || [];
}

export function salvarSalas(salas) {
  localStorage.setItem(CHAVE, JSON.stringify(salas));
}