import { useState } from "react"; //Aqui eu importo o react 

function Cliques() { //aqui a função que vai gerar esses 
  const [cliques, setCliques] = useState(0);  //inicia o state com 0 
  const estilo_maior = {color: cliques < 0 ? 'azul' : 'purpose'} //aqui a variavel que ira indicar o tema se cliques for menor que zero sera um se for maior sera outro
  const estilo_menor = {color: cliques > 10 ? 'gren' : 'pink'}  // essa é a mesma ideia, fiz as duas so para diferenciar, mas por algum motivo esta dando
  return (
    <> 
        {/* Aqui dispara o evento de Cliques */}
        <div>
        <p>Você clicou {cliques} vezes</p>
            <button style={estilo_maior} onClick={() => setCliques(cliques + 1)}>Clique Aqui +1</button> 
            <button style={estilo_menor} onClick={() => setCliques(cliques - 1)}>Clique Aqui -1</button>
        </div>
    </>
  );
}

export default Cliques;
