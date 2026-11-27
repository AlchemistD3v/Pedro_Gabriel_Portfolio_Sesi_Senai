import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Geral = sequelize.define(
  "Geral",
  {
    nome: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    descricao: DataTypes.TEXT,
    ordem: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "gerais",
    timestamps: false,
  },
);

export default Geral;
