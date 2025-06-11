import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item nome ='Teste' data = {2025} />
                <Item nome = 'Tarefa'/>
                <Item nome = 'Tarefa 1'/>
            </ul>
        </>
    )
}

export default List