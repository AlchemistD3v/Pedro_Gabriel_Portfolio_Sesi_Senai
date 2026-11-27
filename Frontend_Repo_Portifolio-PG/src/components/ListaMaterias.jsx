import { useState } from "react";
import { useApi } from "../hooks/useApi.js";
import { api } from "../services/api.js";
import PaginaMateria from "./PaginaMateria.jsx";

function ListaMaterias({ tipo }) {
  const [materiaAberta, setMateriaAberta] = useState(null);
  const { data } = useApi(() => api.listarMaterias(tipo), [tipo]);
  const materias = Array.isArray(data) ? data : [];

  // Clicar na matéria aberta fecha a página.
  function alternarMateria(materia) {
    const jaAberta = materiaAberta && materiaAberta.id === materia.id;

    setMateriaAberta(jaAberta ? null : materia);
  }

  return (
    <div className="Principal">
      <div className="caixamaterias">
        {materias.map((materia) => {
          const ativa = materiaAberta && materiaAberta.id === materia.id;

          return (
            <div
              key={materia.id}
              className={`botaomateria ${ativa ? "ativo" : ""}`}
              onClick={() => alternarMateria(materia)}
            >
              {materia.nome}
            </div>
          );
        })}
      </div>
      {materiaAberta && <PaginaMateria materia={materiaAberta} />}
    </div>
  );
}

export default ListaMaterias;
