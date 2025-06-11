import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HelloWord from './componentes/HelloWord'
import SayMyName from './componentes/SayMyName'
import Pessoa from './componentes/Pessoa'
import './App.css'
import List from './componentes/List'
import gumball from "./assets/turma_gumball.png"
import Frase from './componentes/Frase'
import Evento from './componentes/Evento'
import Condicional from './componentes/Condicional'
import Cliques from './componentes/Cliques'
function App() {
  const [count, setCount] = useState(0)
  const nome = "Ariane"
  const idade = 18
  const profissao = 'Programadora'
  const foto = gumball
  return (

    <>
       <h1>Testando Evento</h1>
       <Evento/>
       <Condicional />
       <Cliques />
    </>
  )
}

//condição ? valorSeVerdadeiro : valorSeFalso

export default App

