import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Materia = sequelize.define(
  "Materia",
  {
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isIn: [["SESI", "SENAI"]],
      },
    },
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
    tableName: "materias",
    timestamps: false,
  },
);

export default Materia;
