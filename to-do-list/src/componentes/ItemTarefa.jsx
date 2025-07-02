import React from 'react';
import './ItemTarefa.css';

const ItemTarefa = ({ tarefa, aoClicar }) => {
  return (
    <div className={`item ${tarefa.concluida ? 'concluida' : ''}`}>
      <div className="conteudo">
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.descricao}</p>
      </div>
      <button 
        onClick={() => aoClicar(tarefa.id)}
        className="botao"
      >
        {tarefa.concluida ? 'Concluida' : 'Concluir'}
      </button>
    </div>
  );
};

export default ItemTarefa;