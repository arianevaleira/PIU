import { useState } from "react"

function Condicional(){
     
    function EnviarEmail(e){
        e.preventDefault()
        console.log('Testando')        
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form onSubmit={EnviarEmail}>
                <input type="email" placeholder="digite seu email" />
                <button type='submit' onClick={EnviarEmail}>Enviar Email</button>
            </form>
        </div>
    )
} 

export default Condicional