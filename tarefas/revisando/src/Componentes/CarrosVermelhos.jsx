import {carros} from './dados_carro'

function CarrosVermelhos(){
    const carrosVermelhos = carros.filter((carro) => carro.cor === 'vermelho');
    const estilo = {border: '1px solid #888', borderRadius: '15px', marginBottom:'15px', padding: '15px;'}
    return(
        <div>
            <h3>Lista carros vermelhos</h3>
            {carrosVermelhos.map((carro) => (
                <div style={estilo} key={carro.id}>
                    <p>Modelo: {carro.modelo}</p>
                    <p>Cor: {carro.cor}</p>
                    <p>Ano: {carro.ano}</p>
                </div>
            ))}
        </div>
    )
    
}

export default CarrosVermelhos