import './Login.css'

function Login (){
    return(
       <div className="Conteiner">
           <form >
                <h1>Acesse o Sistema</h1>
                <div>
                    <input type="email" placeholder="E-mail" />
                </div>
                <div>
                    <input type="password" placeholder="Senha" />
                </div>
                <button>Entrar</button>
           </form>
       </div>
    )
}

export default Login