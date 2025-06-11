import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './componentes/Button'
import AlterarBotao from './componentes/AlterarBotao'
import ListComponent from './componentes/ListComponent'
// import Teste from './componentes/Teste'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    // importando os componentes
    <>
      <Button/> 
      <AlterarBotao/> 
      <ListComponent/>
      {/* <Teste/> */}
    </>
  )
}

export default App
