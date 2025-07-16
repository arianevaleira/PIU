import { useState, useEffect } from 'react'

function CountClicks() {
  const [count, setCount] = useState(0)

  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

  useEffect(() => {
    handleColor()
  },[{count}]) //Quando o componente recarrega e quando o count muda 

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}


export default CountClicks;