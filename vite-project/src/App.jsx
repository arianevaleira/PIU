import './App.css'
import Escopo from './componentes/Escopo'
import Botao from './componentes/Botao'
import EscopoReduz from './componentes/EscopoReduz'
import Info_1v from './componentes/Info_1v'
import ChangeBackground from './componentes/ChangeBackground'
import ChangeValue from './componentes/ChangeValue'
import Props from './componentes/Props'

function App() {
  // const [count, setCount] = useState(0)

  return (
     <>
      {/* <Escopo/>
      <Escopo/>
      <Escopo/>
      <Botao/>
      <EscopoReduz/> */}
      <Info_1v/>
      <Props nome={"Um nome"} newname={"novo"}/>
     </>
  )
}




export default App
