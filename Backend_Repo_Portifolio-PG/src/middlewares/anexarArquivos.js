import { Imagem } from "../models/index.js";

async function salvarArquivo(arquivo) {
  const imagem = await Imagem.create({
    nome: arquivo.originalname,
    mime: arquivo.mimetype,
    dados: arquivo.buffer,
  });

  return `/api/imagens/${imagem.id}`;
}

async function anexarArquivos(req, res, next) {
  try {
    if (req.file) {
      req.body[req.file.fieldname] = await salvarArquivo(req.file);
    }

    if (req.files) {
      for (const campo in req.files) {
        req.body[campo] = await salvarArquivo(req.files[campo][0]);
      }
    }

    next();
  } catch (erro) {
    next(erro);
  }
}

export default anexarArquivos;
