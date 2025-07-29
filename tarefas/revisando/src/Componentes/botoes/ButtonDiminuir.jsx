import { useState } from "react"

function ButtonDiminuir(){
   const [cliques, setCliques] = useState(0)
   const estilo_menor = {color: cliques < 0 ? 'pink' : 'green'}

    return (
        <div>
            <p>Você clicou {cliques} vezes</p>
            <button style={estilo_menor} onClick={() => setCliques(cliques - 1)}>Diminuir</button>
        </div>
    )
}

export default ButtonDiminuir