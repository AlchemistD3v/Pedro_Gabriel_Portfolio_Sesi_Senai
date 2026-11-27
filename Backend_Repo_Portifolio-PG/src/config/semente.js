import { Aluno, Materia, Geral } from "../models/index.js";

// Cria os dados iniciais só quando a tabela ainda está vazia.
// Assim, quem baixa o projeto já vê o portfólio funcionando.
export default async function semearDados() {
  if ((await Aluno.count()) === 0) {
    await Aluno.create({
      id: 1,
      nome: "PEDRO GABRIEL FEITOSA MELO DE OLIVEIRA",
      turma: "3ºG",
      itinerario: "INFORMÁTICA",
      bio: "Olá, meu nome é Pedro Gabriel Feitosa Melo de Oliveira, sou aluno do 3º ano G e faço parte do itinerário formativo de Informática. Tenho objetivos simples e não costumo buscar grandes conquistas. Quero construir uma vida tranquila, fazer aquilo que me faz bem e estar próximo das pessoas que são importantes para mim. Para o futuro, espero alcançar meus objetivos no meu próprio ritmo, encontrar felicidade nas pequenas coisas e ter uma vida com mais tranquilidade e menos dificuldades.",
    });
  }

  if ((await Materia.count()) === 0) {
    await Materia.bulkCreate([
      { tipo: "SESI", nome: "NATUREZA", descricao: "", ordem: 1 },
      { tipo: "SESI", nome: "MATEMATICA", descricao: "", ordem: 2 },
      { tipo: "SESI", nome: "LINGUAGENS", descricao: "", ordem: 3 },
      { tipo: "SESI", nome: "HUMANAS", descricao: "", ordem: 4 },
      { tipo: "SENAI", nome: "BANCO DE DADOS", descricao: "", ordem: 1 },
      { tipo: "SENAI", nome: "CODIFICAÇÃO PARA BACKEND", descricao: "", ordem: 2 },
      { tipo: "SENAI", nome: "DESENVOLVIMENTO DE APIS", descricao: "", ordem: 3 },
      { tipo: "SENAI", nome: "INTERAÇÃO COM API'S", descricao: "", ordem: 4 },
      { tipo: "SENAI", nome: "PROJETO DE BACK-END", descricao: "", ordem: 5 },
      { tipo: "SENAI", nome: "PROJETO DE FRONT-END", descricao: "", ordem: 6 },
      { tipo: "SENAI", nome: "PROJETO INTEGRADOR II", descricao: "", ordem: 7 },
      { tipo: "SENAI", nome: "TESTES DE BACK-END", descricao: "", ordem: 8 },
      { tipo: "SENAI", nome: "TESTES DE FRONT-END", descricao: "", ordem: 9 },
    ]);
  }

  if ((await Geral.count()) === 0) {
    await Geral.bulkCreate([
      { nome: "PROJETOS DESENVOLVIDOS", ordem: 1 },
      { nome: "RELATÓRIOS TÉCNICOS", ordem: 2 },
      { nome: "APRENDIZAGENS CONSTRUÍDAS", ordem: 3 },
      { nome: "COMPETÊNCIAS DESENVOLVIDAS", ordem: 4 },
      { nome: "AUTOAVALIAÇÃO", ordem: 5 },
    ]);
  }
}
