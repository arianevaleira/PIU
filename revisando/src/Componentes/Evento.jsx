import Button from "./evento/Button"

function Evento(){
   
    function meuEvento(){
        console.log('Ativando Evento 1')
    }
 
    function segundoEvento(){
        console.log('Segundo Evento')
    } 

    return (
       <div>
           <p>Clique para disparar um evento:</p>
           <Button event={meuEvento} text='Primeiro Evento'/>{/*Mesmo Componente com eventos diferentes*/}
           <Button event={segundoEvento} text='Segundo Evento'/>
           {/* <button onClick={meuEvento}>Ativar !</button> */}
       </div>   
    )
}

export default Evento