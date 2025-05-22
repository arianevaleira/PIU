import { useState } from "react";
import "./Card.css";
import gumball from "../assets/gumball.webp";
import estacao from "../assets/estacao.jpg";
import hermione from "../assets/hermione.jpg";
import escudo from "../assets/esscudo_hogwarts.jpg";

export default function Card() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="card-container">
      <figure className="card">
        <img 
          src={gumball} 
          alt="Imagem Do incrível mundo de Gumball" 
          onClick={() => handleImageClick(gumball)}
          className="card-image"
        />
        <figcaption>Mundo de Gumball</figcaption>
      </figure>
      
        <figure className="card">
            <img 
            src={escudo} 
            alt="Imagem Do incrível mundo de escudo" 
            onClick={() => handleImageClick(escudo)}
            className="card-image"
            />
            <figcaption>Mundo de escudo</figcaption>
        </figure>
        <figure className="card">
            <img 
            src={hermione} 
            alt="Imagem Do incrível mundo de Gumball" 
            onClick={() => handleImageClick(hermione)}
            className="card-image"
            />
            <figcaption>Mundo de hermione</figcaption>
        </figure>
        
      {zoomedImage && (
        <div className="image-modal" onClick={closeZoom}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img 
              src={zoomedImage} 
              alt="Visualização ampliada" 
              className="zoomed-image"
            />
            <button className="close-button" onClick={closeZoom}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}