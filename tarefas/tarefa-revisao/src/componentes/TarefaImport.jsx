import { useState, useEffect } from "react";
import tarefasIniciais from "./dados/tarefas";

function ListaTarefas(){
    const [tarefas, setTarefas] = useState(tarefasIniciais);
    const [mostrarConcluidas, setMostrarConcluidas] = useState(false);

    function marcarComoConcluida(id){
        const novas = tarefas.map(tarefa =>
            tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} // Muda o estado de concluída, so da tarefa clicada
            : tarefa
        );
        setTarefas(novas);
    } 
    const tarefasParaExibir = mostrarConcluidas
    ? tarefas.filter(tarefa => tarefa.concluida)
    : tarefas;

    useEffect(()=>  {
        console.log("Tarefas atualizadas!", tarefas);
    }, [tarefas]);

    return(
        <div>
            <button onClick={()=> setMostrarConcluidas(!mostrarConcluidas)}>Mostra so mostrarConcluidas
                {mostrarConcluidas ? "Concluídas" : "Todas"}
            </button>
            <ul>
                {tarefas.map(tarefa => (
                <li
                    key={tarefa.id}
                    onClick={() => marcarComoConcluida(tarefa.id)}
                    style={{
                    textDecoration: tarefa.concluida ? 'line-through' : 'none',
                    color: tarefa.concluida ? 'gray' : 'pink',
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


export default ListaTarefas;