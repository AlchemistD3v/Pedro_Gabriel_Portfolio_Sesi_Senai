function EscolhaSesiOuSenai({ sesi, setSesi }) {
  return (
    <div className="Principal">
      <div className="botaobox">
        <button className={`botaobarra ${sesi ? "ativo" : ""}`} onClick={() => setSesi(true)}>
          SESI
        </button>
        <button className={`botaobarra ${!sesi ? "ativo" : ""}`} onClick={() => setSesi(false)}>
          SENAI
        </button>
      </div>
    </div>
  );
}

export default EscolhaSesiOuSenai;
