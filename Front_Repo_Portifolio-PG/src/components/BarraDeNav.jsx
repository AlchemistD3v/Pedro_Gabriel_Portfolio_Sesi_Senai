import FotoDePerfil from "../assets/fmab.jpg"

export const BarraDeNav = ()=>{

    return(
    
    <>
        <div className="Principal">
        <div className="BolhaFotoDePerfil">
        <img className="FotoPerfil" src={FotoDePerfil} alt="" />         
        <h1>Oii, me chamo Pedro Gabriel</h1>
        </div>
        </div>
    </>

    )
}

export default BarraDeNav