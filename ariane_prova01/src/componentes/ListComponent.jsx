import React from 'react';
import myList from './item.js'; // Importa a lista de 

function ListComponent() {
  const listItems = myList.map((item, index) => (
    <li key={index}>{item}</li> // Testando para ver se esta certo pegar o valor index e botar como chave 
  ));

  return (
    <ul>
      {/* retorna a lista */}
      {listItems} 
    </ul>
  );
}
// Por algum motivo que desconheço, essa rederização com o arquivo item da certo , mas com a mesma logica tanto em teste quando item da erra
export default ListComponent;