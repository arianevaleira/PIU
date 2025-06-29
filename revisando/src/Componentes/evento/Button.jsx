function Button(props){
    return(
        <button onClick={props.event}>{props.text}</button> //Passando um evento via props, porque ai o  componente seguinte que ira passar a função
    )
}

export default Button