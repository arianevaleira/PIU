import React from 'react';
import './BotaoTema.css';

const BotaoTema = ({ temaEscuro, aoAlternar }) => {
  return (
    <button className="botao-tema" onClick={aoAlternar}>
      {temaEscuro ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    </button>
  );
};

export default BotaoTema;