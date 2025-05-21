export default function Props ({nome, newname,  matricula}){

    return(
        <>
            <div>
                <h2>Teste props</h2>
                <p>O nome {nome} foi enviado via props</p>
                <p>{newname}</p>
                <p>{matricula}</p>
            </div>
        </>
    )
}
