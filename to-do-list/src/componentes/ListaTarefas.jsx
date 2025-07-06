import ItemTarefa from "./ItemTarefa"; 
import './ListaTarefas.css';

const ListaTarefas = ({ tarefas, aoConcluir, children }) => {
  return (
    <div className="lista">
      <div className="cabecalho">
        {children}
      </div>
      <div className="itens">
        {tarefas.map(tarefa => (
          <ItemTarefa  key={tarefa.id}  tarefa={tarefa}  aoClicar={aoConcluir}/>
        ))}
      </div>
    </div>
  );
};

export default ListaTarefas;