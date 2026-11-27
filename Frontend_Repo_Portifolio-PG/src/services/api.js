const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

const API_ORIGIN = new URL(API_URL).origin;

// Monta o endereço de uma foto ou vídeo que está na pasta uploads.
export function urlArquivo(caminho) {
  if (!caminho) return null;

  return `${API_ORIGIN}${caminho}`;
}

async function buscar(endpoint) {
  let resposta;

  try {
    resposta = await fetch(`${API_URL}${endpoint}`);
  } catch {
    throw new Error("Não foi possível conectar ao servidor. O back-end está rodando?");
  }

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    throw new Error(dados.erro || "Erro ao comunicar com o servidor.");
  }

  return dados;
}

export const api = {
  buscarAluno: () => buscar("/aluno"),
  listarMaterias: (tipo) => buscar(`/materias?tipo=${tipo}`),
  listarConteudoMateria: (id) => buscar(`/conteudo?materia=${id}`),
  listarGerais: () => buscar("/gerais"),
  listarConteudoGeral: (id) => buscar(`/gerais/${id}/conteudo`),
};
