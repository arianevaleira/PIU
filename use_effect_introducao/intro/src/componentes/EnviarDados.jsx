import { useState } from 'react';

function EnviarDados() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('http://localhost:8000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          mensagem: mensagem,
        }),
      });

      if (response.ok) {
        const resultado = await response.json();
        setResposta(`Sucesso: ${resultado.mensagem}`);
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        setResposta(' Erro ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setResposta('Falha na conexão com a API.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Enviar Dados para a API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mensagem:</label><br />
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          Enviar
        </button>
      </form>

      {resposta && <p style={{ marginTop: '15px' }}>{resposta}</p>}
    </div>
  );
}

export default EnviarDados;
