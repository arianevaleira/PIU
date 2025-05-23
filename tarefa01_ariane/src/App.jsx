import { useState } from 'react';
import './App.css';
import Card from './componentes/Card';
import Detalhes from './componentes/Detalhamento';
import BotaoTema from './componentes/BotaoTema';
import NavBar from './componentes/NavBar'; 
import ContainerCentral from './componentes/ContainerCentral';

import gumball from "./assets/gumball.webp";
import gumball1 from "./assets/gumball_darwin.jpeg";
import estacao from "./assets/estacao.jpg";
import hermione from "./assets/hermione.jpg";
import turma from "./assets/turma_gumball.png";
import escudo from "./assets/esscudo_hogwarts.jpg";

const personagens = [
  { id: 1, nome: "Gumball", imagem: gumball, descricao: "Personagem principal do Incrível Mundo de Gumball" },
  { id: 2, nome: "Escudo de Hogwarts", imagem: escudo, descricao: "Símbolo da escola de magia e bruxaria de Hogwarts" },
  { id: 3, nome: "Hermione Granger", imagem: hermione, descricao: "Uma das protagonistas da série Harry Potter" },
  { id: 4, nome: "Estação Espacial", imagem: estacao, descricao: "Representação de uma estação espacial futurista" },
  { id: 5, nome: "Turma do Gumball", imagem: turma, descricao: "Grupo de amigos do Incrível Mundo de Gumball" },
  { id: 6, nome: "Gumball e Darwin", imagem: gumball1, descricao: "Gumball e seu irmão adotivo Darwin" }
];

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  return (
    <div className={`app ${temaEscuro ? 'dark' : 'light'}`}>
      <NavBar/>
      <ContainerCentral>
        <BotaoTema 
          temaEscuro={temaEscuro} 
          onClick={() => setTemaEscuro(!temaEscuro)} 
        />

        <div className="galeria">
          {personagens.map(personagem => (
            <Card 
              key={personagem.id}
              personagem={personagem}
              onClick={setPersonagemSelecionado}
            />
          ))}
        </div>

        {personagemSelecionado && (
          <Detalhes 
            personagem={personagemSelecionado}
            onClose={() => setPersonagemSelecionado(null)}
          />
        )}
      </ContainerCentral>
    </div>
  );
}

export default App;
