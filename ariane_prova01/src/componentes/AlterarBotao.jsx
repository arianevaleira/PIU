import React, { useState } from 'react';
//Teste que eu fiz para tentar entender porque não estava funcionando la em Button
function MeuComponente() {
  const [valor, setValor] = useState(5);

  const estilo = {
    color: valor > 10 ? 'green' : 'pink' 
  };

  return (
    <div>
      <p>Valor: {valor}</p>
      <button style={estilo} onClick={() => setValor(valor + 1)}>Aumentar Valor</button>
    </div>
  );
}

export default MeuComponente