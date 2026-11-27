import { useApi } from "../hooks/useApi.js";
import { api } from "../services/api.js";
import ConteudoBloco from "./ConteudoBloco.jsx";

function PaginaMateria({ materia }) {
  const { data, loading } = useApi(() => api.listarConteudoMateria(materia.id), [materia.id]);
  const conteudos = Array.isArray(data) ? data : [];

  return (
    <div className="Principal">
      <h2>{materia.nome}</h2>
      {materia.descricao && <p>{materia.descricao}</p>}
      {!loading && conteudos.length === 0 && !materia.descricao && (
        <p>Conteúdo ainda não cadastrado.</p>
      )}
      {conteudos.map((item) => (
        <ConteudoBloco key={item.id} item={item} titulo={materia.nome} />
      ))}
    </div>
  );
}

export default PaginaMateria;
