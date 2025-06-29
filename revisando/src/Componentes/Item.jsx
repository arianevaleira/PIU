import Frase from "./Frase"
import PropTypes from "prop-types" //npm install prop-types



function Item({marca, lancamento}){
    return(
        <>
           <li>Essa é a marca: {marca} - Ano de lançamento: {lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    lancamento: 0,
}

export default Item