import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Projeto = sequelize.define(
  "Projeto",
  {
    titulo: {
      type: DataTypes.STRING(160),
      allowNull: false,
    },
    descricao: DataTypes.TEXT,
    tecnologias: DataTypes.STRING(255),
    link: DataTypes.STRING(255),
    imagem: DataTypes.STRING(255),
    video: DataTypes.STRING(255),
  },
  {
    tableName: "projetos",
    timestamps: false,
  },
);

export default Projeto;
