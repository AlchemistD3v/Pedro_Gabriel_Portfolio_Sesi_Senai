import { Imagem } from "../models/index.js";

async function buscar(req, res) {
  try {
    const imagem = await Imagem.findByPk(req.params.id);

    if (!imagem) {
      return res.status(404).json({ erro: "Arquivo não encontrado." });
    }

    res.type(imagem.mime);

    return res.send(imagem.dados);
  } catch (erro) {
    return res.status(500).json({
      erro: "Erro ao buscar arquivo.",
      detalhe: erro.message,
    });
  }
}

export default { buscar };
