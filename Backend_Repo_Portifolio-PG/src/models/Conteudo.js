import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Conteudo = sequelize.define(
  "Conteudo",
  {
    materia_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    geral_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isIn: [["texto", "imagem", "video"]],
      },
    },
    texto: DataTypes.TEXT,
    arquivo: DataTypes.STRING(255),
    ordem: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "conteudo",
    timestamps: false,
  },
);

export default Conteudo;
