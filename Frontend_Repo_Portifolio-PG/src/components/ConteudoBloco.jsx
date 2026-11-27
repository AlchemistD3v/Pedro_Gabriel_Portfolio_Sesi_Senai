import { urlArquivo } from "../services/api.js";

// Mostra um item do conteúdo: texto, foto ou vídeo.
function ConteudoBloco({ item, titulo }) {
  return (
    <div className="blococonteudo">
      {item.tipo === "texto" && <p>{item.texto}</p>}
      {item.tipo === "imagem" && <img src={urlArquivo(item.arquivo)} alt={titulo} />}
      {item.tipo === "video" && <video src={urlArquivo(item.arquivo)} controls />}
    </div>
  );
}

export default ConteudoBloco;
