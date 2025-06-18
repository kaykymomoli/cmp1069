const API_URL = "http://localhost:3000/filmes"; // URL do backend NestJS
const API_URL_SALA = "http://localhost:3000/salas";  // URL do backend NestJS
const API_URL_SESSAO = "http://localhost:3000/sessoes";  // URL para sessões

// Função para pegar todas as sessões
export const getSessoes = async () => {
  try {
    const response = await fetch(API_URL_SESSAO);
    if (!response.ok) throw new Error("Erro ao carregar sessões");
    return await response.json();
  } catch (error) {
    console.error("Erro ao obter sessões:", error);
    throw error;
  }
};

// Função para criar uma sessão
export const createSessao = async (sessaoData) => {
  try {
    const response = await fetch(API_URL_SESSAO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessaoData),
    });
    if (!response.ok) throw new Error("Erro ao criar sessão");
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar sessão:", error);
    throw error;
  }
};

// Função para atualizar uma sessão
export const updateSessao = async (id, sessaoData) => {
  try {
    const response = await fetch(`${API_URL_SESSAO}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessaoData),
    });
    if (!response.ok) throw new Error("Erro ao atualizar sessão");
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar sessão:", error);
    throw error;
  }
};

// Função para excluir uma sessão
export const deleteSessao = async (id) => {
  try {
    const response = await fetch(`${API_URL_SESSAO}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao excluir sessão");
    return await response.json();
  } catch (error) {
    console.error("Erro ao excluir sessão:", error);
    throw error;
  }
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Função para pegar todos os filmes
export const getFilmes = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao carregar filmes"); // Verifica se a resposta foi bem-sucedida
    return await response.json();  // Retorna a lista de filmes
  } catch (error) {
    console.error("Erro ao obter filmes:", error);
    throw error; // Lança erro se a requisição falhar
  }
};

// Função para criar um filme
export const createFilme = async (filmeData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",  // Envia a requisição POST
      headers: {
        "Content-Type": "application/json",  // Indica que o corpo da requisição é em JSON
      },
      body: JSON.stringify(filmeData),  // Envia os dados do filme
    });
    if (!response.ok) throw new Error("Erro ao criar filme");  // Verifica se a resposta foi bem-sucedida
    return await response.json();  // Retorna o filme criado
  } catch (error) {
    console.error("Erro ao criar filme:", error);
    throw error;  // Lança erro se a requisição falhar
  }
};

// Função para atualizar um filme
export const updateFilme = async (id, filmeData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filmeData),
    });
    if (!response.ok) throw new Error("Erro ao atualizar filme");
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar filme:", error);
    throw error;
  }
};

// Função para excluir um filme
export const deleteFilme = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao excluir filme");
    return await response.json();
  } catch (error) {
    console.error("Erro ao excluir filme:", error);
    throw error;
  }
};

// -------------------------------------------------------------------------------------------------------------------------------

export const getSalas = async () => {
  try {
    const response = await fetch(API_URL_SALA);
    if (!response.ok) throw new Error("Erro ao carregar salas");
    return await response.json();
  } catch (error) {
    console.error("Erro ao obter salas:", error);
    throw error;
  }
};

// Função para criar uma sala
export const createSala = async (salaData) => {
  try {
    const response = await fetch(API_URL_SALA, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salaData),
    });
    if (!response.ok) throw new Error("Erro ao criar sala");
    return await response.json();
  } catch (error) {
    console.error("Erro ao criar sala:", error);
    throw error;
  }
};

// Função para atualizar uma sala
export const updateSala = async (id, salaData) => {
  try {
    const response = await fetch(`${API_URL_SALA}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(salaData),
    });
    if (!response.ok) throw new Error("Erro ao atualizar sala");
    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar sala:", error);
    throw error;
  }
};

// Função para excluir uma sala
export const deleteSala = async (id) => {
  try {
    const response = await fetch(`${API_URL_SALA}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Erro ao excluir sala");
    return await response.json();
  } catch (error) {
    console.error("Erro ao excluir sala:", error);
    throw error;
  }
};