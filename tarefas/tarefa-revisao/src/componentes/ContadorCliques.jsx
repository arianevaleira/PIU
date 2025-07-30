import { useState, useEffect } from 'react';

function ContadorDeCliques() {
  const [contador, setContador] = useState(0);
  const [corBotao, setCorBotao] = useState('pink');

  useEffect(() => {
    if (contador > 10) {
      setCorBotao('green');
    }  else if (contador > 0) {
        setCorBotao('pink')
    } else {
      setCorBotao('red');
    }
  }, [contador]); // Executa sempre que contador mudar

  function aumentar() {
    setContador(prev => prev + 1);
  }
  function diminuir() {
    setContador(prev => prev - 1);
  }

  return (
    <div className="container">
      <h2>Contador de Cliques</h2>
      <p>Valor atual: {contador}</p>
      <button 
        onClick={aumentar} 
        style={{ backgroundColor: corBotao, color: 'white', marginRight: '10px' }}
      >
        Incrementar
      </button>
      <button 
        onClick={diminuir} 
        style={{ backgroundColor: corBotao, color: 'white' }}
      >
        Diminuir
      </button>
    </div>
  );
}


export default ContadorDeCliques;