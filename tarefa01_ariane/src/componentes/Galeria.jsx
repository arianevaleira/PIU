import Card from "./Card";
import "./Galeria.css";

export default function Galeria({ personagens, onPersonagemClick }) {
  return (
    
    <div className="card-container">
      {personagens.map((personagem) => (
        <Card 
          key={personagem.id}
          personagem={personagem}
          onClick={onPersonagemClick}
        />
      ))}
    </div>
  );
}