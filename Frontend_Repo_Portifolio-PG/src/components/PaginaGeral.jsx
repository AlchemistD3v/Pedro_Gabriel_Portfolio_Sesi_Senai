import { useApi } from "../hooks/useApi.js";
import { api } from "../services/api.js";
import ConteudoBloco from "./ConteudoBloco.jsx";

function PaginaGeral({ geral }) {
  const { data, loading } = useApi(() => api.listarConteudoGeral(geral.id), [geral.id]);
  const conteudos = Array.isArray(data) ? data : [];

  return (
    <div className="Principal">
      <h2>{geral.nome}</h2>
      {geral.descricao && <p>{geral.descricao}</p>}
      {!loading && conteudos.length === 0 && !geral.descricao && (
        <p>Conteúdo ainda não cadastrado.</p>
      )}
      {conteudos.map((item) => (
        <ConteudoBloco key={item.id} item={item} titulo={geral.nome} />
      ))}
    </div>
  );
}

export default PaginaGeral;
