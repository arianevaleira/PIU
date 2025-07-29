import { useState, useEffect } from 'react';

export default function ListaApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchUsuarios = async () => { 
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
        const dados = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setUsuarios(dados); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Troca o estado de loading para falsa para retirar o parafrafo
      }
    }

    fetchUsuarios();
  }, []); // O array vazio garante que o efeito execute apenas uma vez

  if (loading) {
    return <p>Carregando...</p>; //Enquanto carrega exibe esse paragrafo
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios
        .filter(usuario => usuario.address.city === 'South Elvis')
        .map(usuario => (
          <li key={usuario.id}>{usuario.name} | {usuario.username} | {usuario.address.city}</li>
        ))}
      </ul>
    </div>
  );
}