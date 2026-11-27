import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Imagem = sequelize.define(
  "Imagem",
  {
    nome: DataTypes.STRING(255),
    mime: DataTypes.STRING(100),
    dados: {
      type: DataTypes.BLOB("long"),
      allowNull: false,
    },
  },
  {
    tableName: "imagens",
    timestamps: false,
  },
);

export default Imagem;
