import { useState } from 'react';

function ListaDigitada() {
  const [texto, setTexto] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (texto.trim() === '') return; // Ignora espaços em branco
    setLista([...lista, texto]);
    setTexto(''); // limpa o input
  }

  function aoPressionarEnter(e) {
    if (e.key === 'Enter') {
      adicionarItem();
    }
  }

  return (
    <div className="container">
      <h2>Minha Lista</h2>
      <input
        type="text"
        placeholder="Digite algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={aoPressionarEnter}
      />
      <button onClick={adicionarItem}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{index + 1} - {item}</li>
        ))}
      </ul>
    </div>
  );
}


export default ListaDigitada;