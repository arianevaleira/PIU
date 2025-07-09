import { useState, useEffect } from "react";
import ItemTarefa from "./ItemTarefa"; 
import './ListaTarefas.css';

function ListaTarefas({ tarefas, aoConcluir,children, aoExcluir, aoAlterarPrioridade, }) { 
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(tarefas);
  }, [tarefas]);

  const ordenarPorTitulo = () => {
    const listaOrdenada = [...lista].sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    setLista(listaOrdenada);
  };

  const ordenarPorPrioridade = () => {
    const prioridadeValor = { "Alta": 3, "Media": 2, "Baixa": 1 };
    const listaOrdenada = [...lista].sort((a, b) =>
      prioridadeValor[b.prioridade] - prioridadeValor[a.prioridade]
    );
    setLista(listaOrdenada);
  };
 // esse é o meu que preciso subir para o git
  return (
    <div className="lista">
      <div className="cabecalho">
        {children}
        <div className='ordena'>
          <button onClick={ordenarPorTitulo} className='botao'>Ordenar por Título</button>
          <button onClick={ordenarPorPrioridade} className='botao'>Ordenar por Prioridade</button>
        </div>
      </div>
      <div className="itens">
        {lista.map(tarefa => (
           <ItemTarefa key={tarefa.id} tarefa={tarefa} aoClicar={aoConcluir} aoExcluir={aoExcluir} aoAlterarPrioridade={aoAlterarPrioridade}/>
        ))}
      </div>
    </div>
  );
};

export default ListaTarefas;
