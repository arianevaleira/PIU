import React, { useState } from 'react';
import { tarefasIniciais } from './Dados/MinhasTarefas';
import ListaTarefas from './componentes/ListaTarefas';
import BotaoTema from './componentes/BotaoTema';
import Layout from './componentes/Layout';
import ItemTarefa from "./componentes/ItemTarefa";
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarConclusao = (id) => {
    setTarefas(tarefas.map(tarefa => 
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <Layout temaEscuro={temaEscuro}>
      <BotaoTema temaEscuro={temaEscuro} aoAlternar={alternarTema} />
      <ListaTarefas tarefas={tarefas} aoConcluir={alternarConclusao}>
        <h1>Minhas Tarefas</h1>
        <p>Total: {tarefas.length} | Concluídas: {tarefas.filter(t => t.concluida).length}</p>
      </ListaTarefas>
    </Layout>
  );
}

export default App;