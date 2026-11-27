import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Aluno = sequelize.define(
  "Aluno",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    nome: DataTypes.STRING(160),
    turma: DataTypes.STRING(40),
    itinerario: DataTypes.STRING(120),
    bio: DataTypes.TEXT,
    foto: DataTypes.STRING(255),
  },
  {
    tableName: "aluno",
    timestamps: false,
  },
);

export default Aluno;
