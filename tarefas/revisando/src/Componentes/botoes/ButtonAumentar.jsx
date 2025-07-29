import { useState } from "react"

function ButtonAumentar(){
   const [cliques, setCliques] = useState(0)
   const estilo_maior = {color: cliques > 10 ? 'blue' : 'purple'}


    return(
        <div>
            <p>Você clicou {cliques} vezes</p>
            <button style={estilo_maior} onClick={() => setCliques(cliques + 1)}>Aumentar</button>
        </div>
    )
}

export default ButtonAumentar