import { useState, useEffect } from 'react';
//Verificar os Console.log viu Iuri 
export default function ListaApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [mostrarNomes, setMostrarNomes] = useState(false); 
  const [numero, setNumero] = useState()

 
   const usuarios1 = usuarios.filter((usuario) => usuario.userId === numero)
   function cadastrarNumero(e){
      e.preventDefault()
      console.log(numero)
   }

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchUsuarios = async () => { 
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums'); 
        const dados = await response.json(); 
        setUsuarios(dados);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
        console.log(numero)
      }
    }

    fetchUsuarios();
  }, []); 
  

  if (loading) {
    return <p>Carregando...</p>; 
  }
   

  return (
    <>
        <div>
        <h1>Lista de Usuários</h1>
        <form onSubmit={cadastrarNumero}>
            <input type="text" id="numero" placeholder= "Digite o userID" onChange={(e) => setNumero(e.target.value)}/>
        </form>
        <ul>
            {usuarios1
            .map(usuario => (
            <li key={usuario.id}>{usuario.title} | {usuario.userId} </li>
            ))}
        </ul>
        </div>
        <div>
        <h1>Lista de Usuários Demostração </h1> {/*So para Mostrar que a logica esta certa */}
        <ul>
            {usuarios.filter((usuario) => usuario.userId === 5)
            .map(usuario => (
            <li key={usuario.id}>{usuario.title} | {usuario.userId} </li>
            ))}
        </ul>
        </div>
    </>
  );
}