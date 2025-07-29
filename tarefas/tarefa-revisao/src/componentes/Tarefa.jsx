import { useState, useEffect } from 'react';

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', concluida: false },
    { id: 2, texto: 'Revisar FastAPI', concluida: false }
  ]);

  function marcarComoConcluida(id) {
    const novas = tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novas);
  }

  useEffect(() => {
    console.log("Tarefas atualizadas!", tarefas);
  }, [tarefas]);

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <ul>
        {tarefas.map(tarefa => (
          <li
            key={tarefa.id}
            onClick={() => marcarComoConcluida(tarefa.id)}
            style={{
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              color: tarefa.concluida ? 'gray' : 'black',
              cursor: 'pointer'
            }}
          >
            {tarefa.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
