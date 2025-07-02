import { func } from "prop-types"
import { use, useState } from "react"

function Renderizacao(){

    const [email,setEmail] = useState()
    const [senha, setSenha] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userSenha, setUserSenha] = useState()
     
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("Testando Email")
    }
    
    function enviarSenha(e){
        e.preventDefault()
        setUserSenha(senha)
        console.log("Testando Senha")
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
                       <div>
                          <input type="password" placeholder="Digite sua senha..." onChange={(e) => setSenha(e.target.value) } />
                          <button onClick={enviarSenha}>Enviar-senha</button>
                       </div>
                   </div>
               )}
            </form>
        </div>
    )
}

export default Renderizacao