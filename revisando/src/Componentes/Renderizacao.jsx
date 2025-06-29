import { func } from "prop-types"
import { useState } from "react"

function Renderizacao(){

    const [email,setEmail] = useState()
    const [senha, setSenha] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("Testando")
    }
    
    function enviarSenha(e){
        e.preventDefault()
        setSenha(senha)
        console.log("Testando")
    }

    function limparEmail(e){
        setUserEmail() //Define a condição como vazia e vira falsa
    }

    
    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
               <input type="text" name="email" id="email" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)}/>
               <button onClick={enviarEmail}>Enviar-email</button>
               {userEmail && ( //Se o email for verdade (vai ser verdade se tiver valor)
                   <div>
                       <p>O email do usuario é: {userEmail}</p>
                       <button onClick={limparEmail}>Limpar-email</button>
                       <form>
                          <input type="password" placeholder="Digite sua senha..." onChange={(e) => setSenha(e.target.value) } />
                          <button onClick={enviarSenha}>Enviar-senha</button>
                       </form>
                   </div>
               )}
            </form>
        </div>
    )
}

export default Renderizacao