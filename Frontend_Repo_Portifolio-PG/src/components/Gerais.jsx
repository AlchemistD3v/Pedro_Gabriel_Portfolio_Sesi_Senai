import { useState } from "react";
import { useApi } from "../hooks/useApi.js";
import { api } from "../services/api.js";
import PaginaGeral from "./PaginaGeral.jsx";

function Gerais() {
  const [geralAberto, setGeralAberto] = useState(null);
  const { data } = useApi(api.listarGerais);
  const gerais = Array.isArray(data) ? data : [];

  function alternarGeral(geral) {
    const jaAberto = geralAberto && geralAberto.id === geral.id;

    setGeralAberto(jaAberto ? null : geral);
  }

  return (
    <div className="Principal">
      <div className="caixamaterias">
        {gerais.map((geral) => {
          const ativo = geralAberto && geralAberto.id === geral.id;

          return (
            <div
              key={geral.id}
              className={`botaomateria ${ativo ? "ativo" : ""}`}
              onClick={() => alternarGeral(geral)}
            >
              {geral.nome}
            </div>
          );
        })}
      </div>
      {geralAberto && <PaginaGeral geral={geralAberto} />}
    </div>
  );
}

export default Gerais;
