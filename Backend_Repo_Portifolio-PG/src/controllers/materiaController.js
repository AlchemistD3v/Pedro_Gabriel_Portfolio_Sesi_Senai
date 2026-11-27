import { Materia } from "../models/index.js";
import criarCrud from "./crudController.js";

const materiaController = criarCrud(Materia, ["tipo", "nome", "descricao", "ordem"], {
  filtros: ["tipo"],
  order: [["ordem", "ASC"], ["id", "ASC"]],
});

export default materiaController;
