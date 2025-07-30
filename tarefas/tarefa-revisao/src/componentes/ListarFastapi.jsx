import { useState } from 'react'

export default function Listarfastapi() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', concluida: false },
    { id: 2, texto: 'Revisar FastAPI', concluida: false }
  ])

  function cadastrarTarefas() {
    fetch('http://localhost:8000/tarefas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tarefas)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na resposta da API')
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      alert("Tarefas enviadas com sucesso!")
    })
    .catch(error => {
      console.error(error)
      alert("Erro ao enviar tarefas")
    })
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.texto} - {tarefa.concluida ? "Concluída" : "Pendente"}
          </li>
        ))}
      </ul>
      <button onClick={cadastrarTarefas}>Cadastrar</button>
    </div>
  )
}


