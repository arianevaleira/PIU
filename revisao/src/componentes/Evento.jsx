import Button from "./Button"

function  Evento(){

    function meuEvento() {
        console.log('fui ativado!')
    }

    return(
        <div>
            <p>Clique para disparar o evento</p>
            <Button event={meuEvento} text="primeiro evento" />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default  Evento