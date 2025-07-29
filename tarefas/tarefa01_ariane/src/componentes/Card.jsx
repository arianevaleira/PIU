import "./Card.css";

export default function Card({ personagem, onClick }) {
  return (
      <div className="card" onClick={() => onClick(personagem)}>
        <img 
          src={personagem.imagem} 
          alt={personagem.nome} 
          className="card-image"
        />
      <figcaption>{personagem.nome}</figcaption>
    </div>
  );
}


