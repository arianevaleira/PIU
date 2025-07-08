import './ItemTarefa.css';

function ItemTarefa({ tarefa, aoClicar, aoAlterarPrioridade }) {

  const handleAlterarPrioridade = (event) => {
    const novaPrioridade = event.target.value;
    aoAlterarPrioridade(tarefa.id, novaPrioridade); // informa ao componente pai
  };

  return (
    <div className={`item ${tarefa.concluida ? 'concluida' : ''}`}>
      <div className="conteudo">
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.descricao}</p>
        <p className={`prioridade-texto ${tarefa.prioridade.toLowerCase()}`}>
          Prioridade: {tarefa.prioridade}
        </p>
      </div>

      <select
        value={tarefa.prioridade}
        onChange={handleAlterarPrioridade}
        className="prioridade"
      >
        <option value="Alta">Prioridade Alta</option>
        <option value="Média">Prioridade Média</option>
        <option value="Baixa">Prioridade Baixa</option>
      </select>

      <button className="botao-excluir">Excluir</button>

      <button onClick={() => aoClicar(tarefa.id)} className="botao">
        {tarefa.concluida ? <span>✓ Concluída</span> : <span>Concluir</span>}
      </button>
    </div>
  );
}

export default ItemTarefa;
