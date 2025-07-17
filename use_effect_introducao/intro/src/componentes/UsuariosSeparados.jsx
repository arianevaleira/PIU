import { useState } from 'react';
import '../App.css';

function UsuariosSeparados() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const [mostrarNomes, setMostrarNomes] = useState(false);
  const [mostrarUsernames, setMostrarUsernames] = useState(false);
  const [mostrarCidades, setMostrarCidades] = useState(false);

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };
  const carregarNomes = async () => {
    await fetchUsuarios();
    setMostrarNomes(true);
  };
  const carregarUsernames = async () => {
    await fetchUsuarios();
    setMostrarUsernames(true);
  };
  const carregarCidades = async () => {
    await fetchUsuarios();
    setMostrarCidades(true);
  };
  const carregarTodos = async () => {
    await fetchUsuarios();
    setMostrarNomes(true);
    setMostrarUsernames(true);
    setMostrarCidades(true);
  };
  return (
    <div>
      <h1>Usuários Separados em Tabelas</h1>
      <button onClick={carregarTodos} style={{ marginBottom: '20px', padding: '10px 15px' }}>
        Carregar Todos os Dados
      </button>

      {loading && <p>Carregando dados...</p>}

      <div className="container-tabelas">
        <div className="tabela tabela-nome">
          <h2>Nomes</h2>
          <button onClick={carregarNomes}>Carregar Nomes</button>
          {mostrarNomes && (
            <table>
              <thead>
                <tr><th>Name</th></tr>
              </thead>
              <tbody>
                {usuarios.map(usuario => (
                  <tr key={usuario.id}>
                    <td>{usuario.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="tabela tabela-username">
          <h2>Usernames</h2>
          <button onClick={carregarUsernames}>Carregar Usernames</button>
          {mostrarUsernames && (
            <table>
              <thead>
                <tr><th>Username</th></tr>
              </thead>
              <tbody>
                {usuarios.map(usuario => (
                  <tr key={usuario.id}>
                    <td>{usuario.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="tabela tabela-cidade">
          <h2>Cidades</h2>
          <button onClick={carregarCidades}>Carregar Cidades</button>
          {mostrarCidades && (
            <table>
              <thead>
                <tr><th>Cidade</th></tr>
              </thead>
              <tbody>
                {usuarios.map(usuario => (
                  <tr key={usuario.id}>
                    <td>{usuario.address.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsuariosSeparados;
