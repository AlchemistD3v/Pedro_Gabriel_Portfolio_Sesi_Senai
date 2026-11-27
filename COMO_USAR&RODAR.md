# Portfólio digital — SESI & SENAI  
**Pedro Gabriel Feitosa Melo de Oliveira**

## Como usar/rodar

No terminal do Frontend e do Backend, execute o comando individualmente em cada um dos dois terminais, copiando e colando exatamente como está indicado abaixo. O mesmo comando deve ser inserido nos dois terminais.

```bash
npm install
npm run dev
```

Abra **http://localhost:5173**.

O backend sobe na porta **3001** e o frontend na **5173**.  
Na primeira execução o banco SQLite é criado e os dados iniciais (aluno, matérias e abas gerais) são inseridos automaticamente.

## Cadastro de conteúdo (API)

Não há painel `/admin` no navegador. O cadastro é feito pela API (Postman), com o header:


x-admin-token: minhasenha123


### 1. Dados do aluno
- `GET /api/aluno` — ver dados  
- `PUT /api/aluno` — atualizar nome, turma, itinerário, bio e foto  

### 2. Matérias (SESI e SENAI)
- `GET /api/materias?tipo=SESI` ou `?tipo=SENAI`
- `POST /api/materias` — criar matéria  
- `PUT /api/materias/:id` — editar  
- `DELETE /api/materias/:id` — excluir  

### 3. Conteúdo de uma matéria

POST /api/conteudo

Body (form-data):
- `tipo` → `texto`, `imagem` ou `video`
- `texto` → o texto (se for tipo texto)
- `ordem` → número
- `materia_id` → id da matéria
- `arquivo` → arquivo (se for imagem/vídeo)

### 4. Abas gerais (só no SENAI)
As abas gerais já vêm no seed:

| id | Nome |
|----|------|
| 1 | PROJETOS DESENVOLVIDOS |
| 2 | RELATÓRIOS TÉCNICOS |
| 3 | APRENDIZAGENS CONSTRUÍDAS |
| 4 | COMPETÊNCIAS DESENVOLVIDAS |
| 5 | AUTOAVALIAÇÃO |

Para cadastrar conteúdo nelas:


POST /api/gerais/:id/conteudo


Body (form-data) — **sem** `materia_id`:
- `tipo` → `texto`, `imagem` ou `video`
- `texto` → o texto
- `ordem` → número
- `arquivo` → arquivo (opcional)

Exemplo para AUTOAVALIAÇÃO:

POST http://localhost:3001/api/gerais/5/conteudo


### 5. Projetos

POST /api/projetos

Campos: `titulo`, `descricao`, `tecnologias`, `link`, `imagem`, `video`

### 6. Imagens

GET /api/imagens/:id


## Páginas do site

| O que aparece | Conteúdo |
|---------------|----------|
| Topo | Nome, turma, itinerário e bio do aluno |
| Alternância SESI / SENAI | Botões para trocar entre as duas áreas |
| Matérias | Abas por matéria (conteúdo de texto, imagem ou vídeo) |
| Abas gerais (SENAI) | Projetos desenvolvidos, relatórios, aprendizagens, competências e autoavaliação |

## Estrutura do projeto


├── Backend_Repo_Portifolio-PG/   → API (Express + Sequelize + SQLite)
├── Frontend_Repo_Portifolio-PG/  → Site (React + Vite)
└── package.json                 → scripts para rodar os dois juntos


## API resumida

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/aluno` | Dados do aluno |
| PUT | `/api/aluno` | Atualizar aluno |
| GET/POST/PUT/DELETE | `/api/materias` | Matérias |
| GET | `/api/conteudo?materia=:id` | Conteúdo de uma matéria |
| POST | `/api/conteudo` | Criar conteúdo de matéria |
| GET | `/api/gerais` | Listar abas gerais |
| GET | `/api/gerais/:id/conteudo` | Conteúdo de uma aba geral |
| POST | `/api/gerais/:id/conteudo` | Criar conteúdo em aba geral |
| GET/POST/PUT/DELETE | `/api/projetos` | Projetos |
| DELETE | `/api/conteudo/:id` | Excluir conteúdo |
| GET | `/api/imagens/:id` | Buscar imagem |

Rotas de escrita (POST, PUT, DELETE) exigem o header `x-admin-token`.
