import express from "express";

import alunoController from "../controllers/alunoController.js";
import materiaController from "../controllers/materiaController.js";
import geralController from "../controllers/geralController.js";
import projetoController from "../controllers/projetoController.js";
import conteudoController from "../controllers/conteudoController.js";
import upload from "../middlewares/upload.js";
import anexarArquivos from "../middlewares/anexarArquivos.js";
import { checaSenha } from "../middlewares/auth.js";
import imagemController from "../controllers/imagemController.js";

const router = express.Router();

function registrarRotas(caminho, controller) {
  router.get(`/${caminho}`, controller.listar);
  router.get(`/${caminho}/:id`, controller.buscar);
  router.post(`/${caminho}`, checaSenha, controller.criar);
  router.put(`/${caminho}/:id`, checaSenha, controller.atualizar);
  router.delete(`/${caminho}/:id`, checaSenha, controller.excluir);
}

router.get("/aluno", alunoController.buscar);
router.put("/aluno", checaSenha, upload.single("foto"), anexarArquivos, alunoController.atualizar);

registrarRotas("materias", materiaController);
registrarRotas("gerais", geralController);

router.get("/conteudo", conteudoController.listarDaMateria);
router.post("/conteudo", checaSenha, upload.single("arquivo"), anexarArquivos, conteudoController.criarParaMateria);
router.delete("/conteudo/:id", checaSenha, conteudoController.excluir);

router.get("/gerais/:id/conteudo", conteudoController.listarDoGeral);
router.post("/gerais/:id/conteudo", checaSenha, upload.single("arquivo"), anexarArquivos, conteudoController.criarParaGeral);

const arquivosProjeto = upload.fields([{ name: "imagem" }, { name: "video" }]);

router.get("/projetos", projetoController.listar);
router.get("/projetos/:id", projetoController.buscar);
router.post("/projetos", checaSenha, arquivosProjeto, anexarArquivos, projetoController.criar);
router.put("/projetos/:id", checaSenha, arquivosProjeto, anexarArquivos, projetoController.atualizar);
router.delete("/projetos/:id", checaSenha, projetoController.excluir);

router.get("/imagens/:id", imagemController.buscar);

export default router;
