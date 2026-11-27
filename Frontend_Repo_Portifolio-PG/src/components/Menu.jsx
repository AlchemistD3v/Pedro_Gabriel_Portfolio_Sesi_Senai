import { useApi } from "../hooks/useApi.js";
import { api } from "../services/api.js";

function Menu() {
  const { data } = useApi(api.buscarAluno);
  const aluno = data || {};

  return (
    <div className="Principal">
      <div className="topousuario">
        <div className="nomealuno">{aluno.nome}</div>
        <div className="turmaaluno">{aluno.turma}</div>
        <div className="itinerarioaluno">{aluno.itinerario}</div>
      </div>
      <div className="caixaconteudo">{aluno.bio}</div>
    </div>
  );
}

export default Menu;
