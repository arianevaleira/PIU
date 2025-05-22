import './App.css'
import Escopo from './componentes/Escopo'
import Botao from './componentes/Botao'
import EscopoReduz from './componentes/EscopoReduz'
import Info_1v from './componentes/Info_1v'
import ChangeBackground from './componentes/ChangeBackground'
import ChangeValue from './componentes/ChangeValue'
import Props from './componentes/Props'
import Children from './componentes/Children'
import Card from './componentes/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
     <>
      {/* <Escopo/>
      <Escopo/>
      <Escopo/>
      <Botao/>
      <EscopoReduz/> */}
      {/* <Info_1v/>
      <Props nome={"Um nome"} newname={"novo"} matricula={20221101110024}/> */}
      <Children>
        <Card/>
      </Children>
      <br />
      <Children>
        <Card/>
      </Children>
     </>
  )
}




export default App
