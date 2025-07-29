import React from 'react'

//Arquivo que criaria o <li> ou seja deixaria mais generico 
const ItemLista = ({ carro }) => {
  return (
    <div>
      <div className="conteudo">
        <h3>{carro.modelo}</h3>
        <p>{carro.cor}</p>
        <p>{carro.ano}</p>
      </div>
    </div>
  );
};

export default ItemTarefa;