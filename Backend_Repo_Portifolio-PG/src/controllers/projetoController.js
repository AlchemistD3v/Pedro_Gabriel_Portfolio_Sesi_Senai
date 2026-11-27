import { Projeto } from "../models/index.js";
import criarCrud from "./crudController.js";

const projetoController = criarCrud(
  Projeto,
  ["titulo", "descricao", "tecnologias", "link", "imagem", "video"],
  {
    order: [["id", "DESC"]],
  },
);

export default projetoController;
