import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Pessoa from './Componentes/Pessoa'
import HelloWord from './Componentes/HelloWord'
import SayMyName from './Componentes/SayMyName'
import List from "./Componentes/List"
import Evento from './Componentes/Evento'
import Form from "./Componentes/Form"
import Lista from './Componentes/Lista'
import ButtonAumentar from './Componentes/botoes/ButtonAumentar'
import ButtonDiminuir from './Componentes/botoes/ButtonDiminuir'
import ListaCarros from './Componentes/ListaCarros'
import Renderizacao from './Componentes/Renderizacao'
import CarrosVermelhos from './Componentes/CarrosVermelhos'

function App() {
  const [count, setCount] = useState(0)
  const nome = "Ariane 1"
  const idade = "18"
  const profissao = "Programador"
  
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <>
      <h1>Renderização de Listas</h1>
      <Lista itens={meusItens}/>
      <ButtonAumentar/>
      <ButtonDiminuir/>
      <ListaCarros/>
      <CarrosVermelhos/>
    </>
  )
}

export default App
