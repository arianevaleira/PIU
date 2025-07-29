import { useState, useEffect } from 'react'

export default function MudarCor() {
  const [texto, setTexto] = useState("")
  const [mostrar, setMostrar] = useState(false) 

  function cadastrarUsuario(e) {
        e.preventDefault() //Não deixa recarregar
        console.log(texto)
        setMostrar(true) 
        console.log(`Usuario: ${texto} foi cadastrado`)
   }
  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#f2cc67", "#f38264 ", "#f40034", "#5f051f ", "#75baa8"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

  useEffect(() => {
    handleColor()
  },[{texto}])

  return (
    <>
      <div className="card">
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
        <button onClick={cadastrarUsuario}>Mostrar Mensagem</button>
        {mostrar && <p>{texto}</p>}
      </div>
    </>
  )
}

