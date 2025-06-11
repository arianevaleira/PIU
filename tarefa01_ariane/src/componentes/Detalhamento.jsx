import "./Detalhamento.css";

export default function Detalhes({ personagem, onClose }) {
  return (
    <div className="detalhes">
      <div className="detalhes-conteudo">
        <img src={personagem.imagem} alt={personagem.nome} />
        <h2>{personagem.nome}</h2>
        <p>{personagem.descricao}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}