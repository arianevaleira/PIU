import './ItemTarefa.css';

const ItemTarefa = ({ tarefa, aoClicar }) => {
  return (
    <div className={`item ${tarefa.concluida ? 'concluida' : ''}`}>
      <div className="conteudo">
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.descricao}</p>
        <p className={`prioridade-texto ${tarefa.prioridade.toLowerCase()}`}>
           Prioridade: {tarefa.prioridade}
        </p>

      </div>
      
      <select defaultValue="Media" className="prioridade">
        <option value="Alta" style={{ color: '#ff6b6b' }}>Prioridade Alta</option>
        <option value="Media" style={{ color: '#ffd166' }}>Prioridade Média</option>
        <option value="Baixa" style={{ color: '#06d6a0' }}>Prioridade Baixa</option>
      </select>
      
      <button className="botao-excluir">Excluir</button>
      
      <button onClick={() => aoClicar(tarefa.id)} className="botao">
        {tarefa.concluida ? (
          <span>✓ Concluída</span>
        ) : (
          <span>Concluir</span>
        )}
      </button>
    </div>
  );
};

export default ItemTarefa;