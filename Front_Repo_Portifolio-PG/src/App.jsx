import { useEffect, useState } from 'react'
import './App.css'
import { BarraDeNav } from './components/BarraDeNav'
import { Menu } from './components/Menu'
import Sesi from './components/SesiAba'
import EscolhaSesiOuSenai from './components/EscolhaSesiOuSenai'

function App() {
const [sesi,setSesi] = useState()

useEffect(()=>{
console.log(sesi)
},[sesi])
  return (
  <>
  <div className='box'>
  <Menu></Menu>
  <BarraDeNav></BarraDeNav>
  <EscolhaSesiOuSenai Sesi={setSesi}></EscolhaSesiOuSenai>
  { sesi && <SesiAba></SesiAba>}
  {!(sesi) }

  </div>
  </>
  )
}

export default App
