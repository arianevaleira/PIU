import { carros } from './dados_carro'

function ListaCarros(){
    const estilo = {border: '1px solid #888', borderRadius: '15px', marginBottom:'15px', padding: '15px;'}
    return(
        <div>    
            <h3>Lista de Carros</h3>
            {carros.map((carro) => (
                <div key={carro.id} style={estilo}>
                    <p>Modelo: {carro.modelo}</p>
                    <p>Ano: {carro.ano}</p>
                </div>
            ))}
        </div>
    )
}

export default ListaCarros