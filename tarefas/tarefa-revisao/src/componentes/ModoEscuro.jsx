import {useEffect, useState} from 'react';
 
function ModoEscuro(){
    const [modoEscuro, setModoEscuro] = useState(false);
    
    function mudarTema(){
        if (modoEscuro){
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            document.documentElement.style.backgroundColor = 'black';
        } else{
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.documentElement.style.backgroundColor = 'white';
        }
    }

    useEffect(() => {mudarTema()}, [modoEscuro]);
    return(
        <>
           <button onClick={()=> setModoEscuro(!modoEscuro)}>Trocar para tema: {modoEscuro ? 'Claro':'Escuro'  }</button>      
        </>
    )
}

export default ModoEscuro;