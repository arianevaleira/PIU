import "./Pessoa.css"

function Pessoa(props){
       return (
          <div>
              <img src={props.foto} alt={props.nome}/>
              <h3>Nome: {props.nome}</h3>
              <p>Idade: {props.idade}</p>
              <p>Profissão: {props.profissao}</p>
          </div>
       )
}

export default Pessoa


