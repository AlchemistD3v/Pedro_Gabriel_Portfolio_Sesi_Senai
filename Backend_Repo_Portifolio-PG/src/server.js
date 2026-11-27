import "dotenv/config";

import app from "./app.js";
import { sequelize } from "./models/index.js";
import semearDados from "./config/semente.js";

const PORT = process.env.PORT || 3001;

async function iniciarServidor() {
  try {
    await sequelize.authenticate();

    console.log("Banco de dados conectado!");
    
    await sequelize.sync();
    await semearDados();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (erro) {
    console.error("Erro ao iniciar o servidor:", erro);
  }
}

iniciarServidor();
