import { useState, useEffect, use } from 'react'

function CountClicks() {
  const [count, setCount] = useState(0)
  const [monitor, setMonitor] = useState(false) 
  const [mudar, setMudar] = useState(0)

  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#c75f77", "#fefab6", "#77a493", "#836177", "#654b49"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;
              
            if (monitor) {
              setMudar(mudar+1) //Alterar mudar sempre 
            }
    }

  useEffect(() => {
    handleColor()
  },[{mudar}]) //Ele fica observando essa variavel  
   
  function mudaraoClicar(){
    setCount(count+1)
    setMonitor(!monitor) //aqui eu inverto o estado 
  }
  return (
    <>
      <div className="card">
        <button onClick={mudaraoClicar}>
          count is {count}
        </button>
      </div>
    </>
  )
}


export default CountClicks;
