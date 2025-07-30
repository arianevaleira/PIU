import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModoEscuro from './componentes/ModoEscuro'
import MudarCor from './componentes/MudarCor'
import Formulario from './componentes/Formulario'
import ListaApi from './componentes/ListaApi'
import Tarefa from './componentes/Tarefa'
import ListaTarefas from './componentes/TarefaImport'
import Listarfastapi from './componentes/ListarFastapi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaTarefas/>
      <Tarefa/>
      <ListaApi/>
      <Formulario/>
      <ModoEscuro/>
      <MudarCor/>
      <Listarfastapi/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
