import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleClick(){
        return(
            alert('Handle Clique')
        )
    }
    return(
        <>
          <button onClick={() => console.log('Clicado')}>Clique</button> 
          <div>
              <button onClick={() => alert('Holla')}>Oi</button>
          </div>
          <div>
            <button onClick={handleClick}>Handle Clique</button>
          </div>
          <div onClick={() => alert('conteiner')}><p>Um dia Ilumidado</p></div>
        </>
    )
}

export default EscopoReduz