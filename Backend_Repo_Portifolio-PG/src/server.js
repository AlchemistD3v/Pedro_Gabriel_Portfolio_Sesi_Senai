import "dotenv/config";

import app from "./app.js";
import { sequelize } from "./models/index.js";

const PORT = process.env.PORT || 3001;

async function iniciarServidor() {
  try {
    await sequelize.authenticate();

    console.log("Banco de dados conectado!");

    // Cria só as tabelas que ainda não existem. Não altera as que já estão no banco.
    await sequelize.sync();

    console.log("Tabelas sincronizadas!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (erro) {
    console.error("Erro ao iniciar o servidor:", erro);
  }
}

iniciarServidor();
