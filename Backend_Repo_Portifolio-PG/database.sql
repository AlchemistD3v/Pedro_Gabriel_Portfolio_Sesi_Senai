CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

CREATE TABLE IF NOT EXISTS aluno (
  id INT PRIMARY KEY,
  nome VARCHAR(160),
  turma VARCHAR(40),
  itinerario VARCHAR(120),
  bio TEXT,
  foto VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS materias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(10),
  nome VARCHAR(120),
  descricao TEXT,
  ordem INT
);

CREATE TABLE IF NOT EXISTS projetos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(160),
  descricao TEXT,
  tecnologias VARCHAR(255),
  link VARCHAR(255),
  imagem VARCHAR(255),
  video VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS gerais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  descricao TEXT,
  ordem INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS conteudo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  materia_id INT NULL,
  geral_id INT NULL,
  tipo VARCHAR(10) NOT NULL,
  texto TEXT,
  arquivo VARCHAR(255),
  ordem INT DEFAULT 0
);

INSERT INTO aluno (id, nome, turma, itinerario, bio) VALUES (
  1,
  'Pedro Gabriel Feitosa Melo de Oliveira',
  '3ºG',
  'Itinerário formativo de Informática',
  'Tenho objetivos simples e não costumo buscar grandes conquistas. Quero construir uma vida tranquila, fazer aquilo que me faz bem e estar próximo das pessoas que são importantes para mim. Para o futuro, espero alcançar meus objetivos no meu próprio ritmo, encontrar felicidade nas pequenas coisas e ter uma vida com mais tranquilidade e menos dificuldades.'
);

INSERT INTO materias (tipo, nome, descricao, ordem) VALUES
  ('SESI', 'NATUREZA', '', 1),
  ('SESI', 'MATEMATICA', '', 2),
  ('SESI', 'LINGUAGENS', '', 3),
  ('SESI', 'HUMANAS', '', 4),
  ('SENAI', 'BANCO DE DADOS', '', 1),
  ('SENAI', 'CODIFICAÇÃO PARA BACKEND', '', 2),
  ('SENAI', 'DESENVOLVIMENTO DE APIS', '', 3),
  ('SENAI', 'INTERAÇÃO COM API''S', '', 4),
  ('SENAI', 'PROJETO DE BACK-END', '', 5),
  ('SENAI', 'PROJETO DE FRONT-END', '', 6),
  ('SENAI', 'PROJETO INTEGRADOR II', '', 7),
  ('SENAI', 'TESTES DE BACK-END', '', 8),
  ('SENAI', 'TESTES DE FRONT-END', '', 9);

INSERT INTO gerais (nome, ordem) VALUES
  ('PROJETOS DESENVOLVIDOS', 1),
  ('RELATÓRIOS TÉCNICOS', 2),
  ('APRENDIZAGENS CONSTRUÍDAS', 3),
  ('COMPETÊNCIAS DESENVOLVIDAS', 4),
  ('AUTOAVALIAÇÃO', 5);
