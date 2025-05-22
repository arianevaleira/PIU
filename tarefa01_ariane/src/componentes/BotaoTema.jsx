import React, { useState } from 'react';
import './BotaoTema.css';

function BotaoTema() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    document.body.className = temaEscuro ? 'tema-claro' : 'tema-escuro';
  };

  return (
    <button className="botao-tema" onClick={alternarTema}>
      Mudar para tema {temaEscuro ? 'claro' : 'escuro'}
    </button>
  );
}

export default BotaoTema;
