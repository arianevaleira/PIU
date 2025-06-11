import React from 'react';
import myData from './dados_carros.js'; // Importa a lista

function Teste() {
  return (
    <ul>
        {/* mapea o arquivo  */}
      {myData.map((item) => ( 
        <li key={item.id}>
          <strong>Nome:</strong> {item.modelo}, <strong>Idade:</strong> {item.ano} 
        </li>
      ))}
    </ul>
  );
}

export default Teste;