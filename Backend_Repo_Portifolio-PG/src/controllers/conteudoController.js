import { Conteudo } from "../models/index.js";

const ordemPadrao = [["ordem", "ASC"], ["id", "ASC"]];

async function listarDaMateria(req, res) {
  try {
    const conteudos = await Conteudo.findAll({
      where: { materia_id: req.query.materia },
      order: ordemPadrao,
    });

    return res.json(conteudos);
  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao listar conteúdo.",
      detalhe: erro.message,
    });
  }
}

async function listarDoGeral(req, res) {
  try {
    const conteudos = await Conteudo.findAll({
      where: { geral_id: req.params.id },
      order: ordemPadrao,
    });

    return res.json(conteudos);
  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao listar conteúdo.",
      detalhe: erro.message,
    });
  }
}

// Salva um item de conteúdo, ligado a uma matéria ou a um geral.
async function salvar(req, res, vinculo) {
  try {
    const { tipo, texto, ordem, arquivo } = req.body;

    const conteudo = await Conteudo.create({
      ...vinculo,
      tipo,
      texto: texto || null,
      ordem: ordem || 0,
      arquivo: arquivo || null,
    });

    return res.status(201).json(conteudo);
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
}

async function criarParaMateria(req, res) {
  if (!req.body.materia_id) {
    return res.status(400).json({ erro: "materia_id é obrigatório." });
  }

  return salvar(req, res, { materia_id: req.body.materia_id, geral_id: null });
}

async function criarParaGeral(req, res) {
  return salvar(req, res, { materia_id: null, geral_id: req.params.id });
}

async function excluir(req, res) {
  try {
    const removidos = await Conteudo.destroy({ where: { id: req.params.id } });

    if (!removidos) {
      return res.status(404).json({ erro: "Conteúdo não encontrado." });
    }

    return res.json({ ok: true });
  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao excluir conteúdo.",
      detalhe: erro.message,
    });
  }
}

export default {
  listarDaMateria,
  listarDoGeral,
  criarParaMateria,
  criarParaGeral,
  excluir,
};
