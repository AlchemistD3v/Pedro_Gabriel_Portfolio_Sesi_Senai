import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu.jsx";
import EscolhaSesiOuSenai from "./components/EscolhaSesiOuSenai.jsx";
import ListaMaterias from "./components/ListaMaterias.jsx";
import Gerais from "./components/Gerais.jsx";

function App() {
  const [sesi, setSesi] = useState(true);

  return (
    <div className="box">
      <Menu />
      <EscolhaSesiOuSenai sesi={sesi} setSesi={setSesi} />
      {sesi ? <ListaMaterias key="SESI" tipo="SESI" /> : <ListaMaterias key="SENAI" tipo="SENAI" />}
      {!sesi && <Gerais />}
    </div>
  );
}

export default App;
