import { useEffect, useState } from 'react'
import './App.css'
import { Menu } from './components/Menu'
import SesiAba from './components/SesiAba'
import SenaiAba from './components/SenaiAba'
import EscolhaSesiOuSenai from './components/EscolhaSesiOuSenai'

function App() {
  const [sesi, setSesi] = useState(true)

  useEffect(() => {
    console.log(sesi)
  }, [sesi])

  return (
    <>
      <div className='box'>
        <Menu></Menu>
        <EscolhaSesiOuSenai Sesi={setSesi}></EscolhaSesiOuSenai>
        {sesi && <SesiAba></SesiAba>}
        {!sesi && <SenaiAba></SenaiAba>}
      </div>
    </>
  )
}

export default App
