const CHAVE = "ingressos";

export function getIngressos() {
  return JSON.parse(localStorage.getItem(CHAVE)) || [];
}

export function salvarIngressos(lista) {
  localStorage.setItem(CHAVE, JSON.stringify(lista));
}
