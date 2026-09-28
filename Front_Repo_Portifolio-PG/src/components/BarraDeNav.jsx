import FotoDePerfil from "../assets/placeholder.jpg"

export const BarraDeNav = ()=>{

    return(
    
    <>
        <div className="Principal">
        <div className="BolhaFotoDePerfil">
        <img className="FotoPerfil" src={FotoDePerfil} alt="" />         
        <h1>Oii, me chamo Pedro Gabriel</h1>
        </div>
         <hr />


        <h1>1º BIMESTRE</h1>
        <div className="botaobox">  
        <button className="botaobarra">PROJETOS DESENVOLVIDOS</button> 
        
        <button className="botaobarra">CÓDIGOS PRODUZIDOS</button> 

        <button className="botaobarra">REGISTRO FOTOGRÁFICOS</button> 

        <button className="botaobarra">VÍDEOS</button> 

        <button className="botaobarra">RELATÓRIOS TÉCNICOS</button>

        <button className="botaobarra">APRENDIZAGENS CONSTRUÍDAS</button> 

        <button className="botaobarra">COMPETÊNCIAS DESENVOLVIDAS</button> 

        <button className="botaobarra">AUTOAVALIAÇÃO</button>        
        </div>



         </div>
    </>

    )
}
