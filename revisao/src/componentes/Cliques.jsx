import { useState } from "react";

function Cliques() {
  const [cliques, setCliques] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
        <div>
        <p>Você clicou {cliques} vezes</p>
        <button onClick={() => setCliques(cliques + 1)}>Clique Aqui +1</button>
        <button onClick={() => setCliques(cliques - 1)}>Clique Aqui -1</button>
        </div>

        <div>
            <button onClick={() => setMostrar(!mostrar)}>Mostrar/Esconder</button> {/*"Atualize o valor de mostrar para o oposto do que ele é agora"*/}

            {/* Se mostrar for true, renderiza o <p> */}
            {mostrar && <p>Este é um texto oculto!</p>}
        </div>
    </>
  );
}

export default Cliques;
