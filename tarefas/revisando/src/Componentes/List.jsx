import Item from "./Item"

function List(){
    return(
       <>
         <h1>Minha Lista</h1>
         <ul>
            <Item marca='Tal' lancamento={1985}/>
            <Item marca='Tal 1' lancamento={1975}/>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
         </ul>
       </>
    )
}

export default List