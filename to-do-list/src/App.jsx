import { useState, useEffect } from 'react';
import { tarefasIniciais } from './Dados/MinhasTarefas';
import ListaTarefas from './componentes/ListaTarefas';
import BotaoTema from './componentes/BotaoTema';
import Layout from './componentes/Layout';
import FormularioTarefa from './componentes/FormularioTarefa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add('escuro');
    } else {
      document.body.classList.remove('escuro');
    }
  }, [temaEscuro]);

  const alternarConclusao = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };
  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };
   
  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, { ...novaTarefa, id: Date.now(), concluida: false }]);
  };
  
  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  const alterarPrioridade = (id, novaPrioridade) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, prioridade: novaPrioridade } : tarefa
    ));
  };

  return (
    <Layout temaEscuro={temaEscuro}>
      <BotaoTema temaEscuro={temaEscuro} aoAlternar={alternarTema} />
      <FormularioTarefa aoAdicionar={adicionarTarefa} />
      <ListaTarefas tarefas={tarefas} aoConcluir={alternarConclusao} aoExcluir={excluirTarefa} aoAlterarPrioridade={alterarPrioridade}>
        <h1>Minhas Tarefas</h1>
        <p>Total: {tarefas.length} | Concluídas: {tarefas.filter(t => t.concluida).length}</p>
      </ListaTarefas>
    </Layout>
  );
}

export default App;
