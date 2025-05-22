import { useState } from "react"

export default function Info_1v(){
    // let valor = 0
    let [valor, setValor] = useState(0) //Inicializada com 0
    return (
        <>
           <div>
               <button onClick={()=> setValor(valor+1)}>Cliques {valor}</button>
           </div>
        </>
    )

}
