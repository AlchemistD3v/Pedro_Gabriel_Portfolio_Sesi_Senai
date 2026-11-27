import { useEffect, useState } from "react";

// Chama a função e devolve { data, loading, error }.
// Quando as dependências mudam, a busca é feita de novo.
export function useApi(funcao, dependencias = []) {
  const [estado, setEstado] = useState({ data: null, loading: true, error: "" });

  useEffect(() => {
    let cancelado = false;

    setEstado({ data: null, loading: true, error: "" });

    funcao()
      .then((data) => {
        if (!cancelado) setEstado({ data, loading: false, error: "" });
      })
      .catch((erro) => {
        if (!cancelado) setEstado({ data: null, loading: false, error: erro.message });
      });

    return () => {
      cancelado = true;
    };
  }, dependencias);

  return estado;
}
