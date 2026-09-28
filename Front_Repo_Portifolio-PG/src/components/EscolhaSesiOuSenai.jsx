 import { useState } from "react";
 export const EscolhaSesiOuSenai = ({Sesi})=>{
    const [sesi, setSesi] = useState(true)


    return(
    
    <>
    
        <div className="Principal">
        <div className="botaobox"> 
        <button className="botaobarra" onClick={()=>{
            
                setSesi(true)
                if(Sesi){
                    Sesi(true)
                }
        }}>SESI</button> 
        <button className="botaobarra" onClick={()=>{
           
                setSesi(false)
            if(Sesi){
                    Sesi(false)
                }
           
        }}>SENAI</button> 
        </div>
        </div>
    </>

    )
}

export default EscolhaSesiOuSenai;
 
 
 