import React from 'react'
import ItemLista from "./ItemLista"


const ListaCarros = ({carros}) => {
  return (
    <div>
       {/* Outra tentativa de entender o erro  */}
      <div className="itens">
        {carros.map(carros => (
          <ItemLista 
            key={carros.id} 
            carro={carros.nome}  />
        ))}
      </div>
    </div>
  );
};

export default ListaTarefas;