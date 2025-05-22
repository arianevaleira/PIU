import "./Card.css"
import screen from "../assets/gumball.webp"

export default function Card(){
    // let screen = "https://cdn.pixabay.com/photo/2017/09/11/14/42/rings-2739188_1280.jpg"

    return(
        <div>
            <figure>
                <img src={screen} alt="Imagem Do incrivel mundo de Gumball" />
                <figcaption>Mundo de Gumball</figcaption>
            </figure>
        </div>
    )
}