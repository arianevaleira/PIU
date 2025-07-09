import { useState } from 'react';
import './FormularioTarefa.css'

const FormularioTarefa = ({ aoAdicionar }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Media');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo.trim()) return; //O trim é para tirar os espaços em branco

    aoAdicionar({ titulo, descricao, prioridade });
    setTitulo('');
    setDescricao('');
    setPrioridade('Media');
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h3>Adicionar Tarefa</h3>
      <label>Tarefa:</label>
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <label>Descrição:</label>
      <textarea placeholder="Descrição da tarefa" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
      <label>Prioridade:</label>
      <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
        <option value="Alta">Alta</option>
        <option value="Media">Média</option>
        <option value="Baixa">Baixa</option>
      </select>

      <button type="submit" className='botao'>+ Adicionar</button>
    </form>
  );
};

export default FormularioTarefa;
