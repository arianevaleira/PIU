import { useState, useEffect } from "react";

function Formulario() {
  const [mostrar, setMostrar] = useState(false)  
  const [mudar, setMudar] = useState(false)
  const passe = 'AlunoIFRN'
  function cadastrarUsuario(e) {
        e.preventDefault() 
        console.log(name)
        setMostrar(true)
        console.log(`Usuario: ${name} foi cadastrado com a Palavra-passe: ${password}`) //Isso vai funcionar como um metodo post
        console.log("Cadastrou o usuario")
   }
   
   
   const [name, setName] = useState()
   const [password, setPassword] = useState()
   
   useEffect(() => {
    if (password === passe) {
      console.log("acertou")
      document.body.style.backgroundColor = 'pink';
      document.body.style.color = 'white';
      document.documentElement.style.backgroundColor = 'pink';
    }  
    }, [password]);

   return (
    <div>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" placeholder= "Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Palavra-passe:</label>
                <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar"/>
                {mostrar && <p>Usuário: {name} foi cadastrado com a Palavra-passe: {password}</p>}
            </div>
        </form>
    </div>
   )
}

export default Formulario;