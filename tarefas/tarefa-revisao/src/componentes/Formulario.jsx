import { useState } from "react"

function Formulario() {
   const [mostrar, setMostrar] = useState(false)
     
  function cadastrarUsuario(e) {
        e.preventDefault() //Não deixa recarregar
        console.log(name)
        setMostrar(true)
        console.log(`Usuario: ${name} foi cadastrado com a senha Senha: ${password}`) //Isso vai funcionar como um metodo post
        console.log("Cadastrou o usuario")
   }
   
  
   const [name, setName] = useState()
   const [password, setPassword] = useState()

   return (
    <div>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" placeholder= "Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>
                {mostrar && <p>Usuário: {name} foi cadastrado com a senha: {password}</p>}
            </div>
        </form>
    </div>
   )
}

export default Formulario