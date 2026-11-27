import { Geral } from "../models/index.js";
import criarCrud from "./crudController.js";

const geralController = criarCrud(Geral, ["nome", "descricao", "ordem"], {
  order: [["ordem", "ASC"], ["id", "ASC"]],
});

export default geralController;
