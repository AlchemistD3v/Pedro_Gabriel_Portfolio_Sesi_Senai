import { Aluno } from "../models/index.js";

async function buscar(req, res) {
  try {
    const aluno = await Aluno.findByPk(1);

    return res.json(aluno || {});
  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao buscar aluno.",
      detalhe: erro.message,
    });
  }
}

async function atualizar(req, res) {
  try {
    const aluno = await Aluno.findByPk(1);

    if (!aluno) {
      return res.status(404).json({ erro: "Aluno não encontrado." });
    }

    const dados = {};

    for (const campo of ["nome", "turma", "itinerario", "bio", "foto"]) {
      if (req.body[campo] !== undefined) {
        dados[campo] = req.body[campo];
      }
    }

    await aluno.update(dados);

    return res.json(aluno);
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
}

export default { buscar, atualizar };
