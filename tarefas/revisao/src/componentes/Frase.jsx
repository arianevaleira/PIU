import style from "./Frase.module.css"

function Frase (){
    return (
        <div className={style.fraseConteiner}>
            <p>Este é um paragrafo de um coponente diferente</p>
        </div>
    )
}

export default Frase