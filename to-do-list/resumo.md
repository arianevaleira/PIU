import { useState, useEffect } from "react";
import ItemTarefa from "./ItemTarefa"; 
import './ListaTarefas.css';

function ListaTarefas({ tarefas, aoConcluir,children, aoExcluir, aoAlterarPrioridade }) { 
  const [lista, setLista] = useState([]);
  
  useEffect(() => {
    setLista(tarefas);
  }, [tarefas]);
 
  const ordenarPorTitulo = () => {
    const listaOrdenada = [...lista].sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    setLista(listaOrdenada);
  };


  const ordenarPorPrioridade = () => {
    const prioridadeValor = { "Alta": 3, "Media": 2, "Baixa": 1 };
    const listaOrdenada = [...lista].sort((a, b) =>
      prioridadeValor[b.prioridade] - prioridadeValor[a.prioridade]
    );
    setLista(listaOrdenada);
  };
  return (
    <div className="lista">
      <div className="cabecalho">
        {children}
        <div className='ordena'>
          <button onClick={ordenarPorTitulo} className='botao'>Ordenar por Título</button>
          <button onClick={ordenarPorPrioridade} className='botao'>Ordenar por Prioridade</button>
        </div>
      </div>
      <div className="itens">
        {lista.map(tarefa => (
           <ItemTarefa key={tarefa.id} tarefa={tarefa} aoClicar={aoConcluir} aoExcluir={aoExcluir} aoAlterarPrioridade={aoAlterarPrioridade}/>
        ))}
      </div>
    </div>
  );
};

export default ListaTarefas;
import './Layout.css';

function Layout({ children, temaEscuro }){
  return (
    <div className={`container ${temaEscuro ? 'escuro' : ''}`}>
        {children}
    </div>
  );
};

export default Layout;




import './ItemTarefa.css';
import { useState } from 'react';

const ItemTarefa = ({ tarefa, aoClicar, aoAlterarPrioridade, aoExcluir }) => {

  const [mostrarModal, setMostrarModal] = useState(false);
  

  //-------------------------------
  // Modal de confirmação (Excluir)
  //-------------------------------
  const abrirModal = () => setMostrarModal(true);
  const fecharModal = () => setMostrarModal(false);

  const excluirTarefa = () => {
    aoExcluir(tarefa.id)
    fecharModal()
  }

  return (
    <>
      <div className={`item ${tarefa.concluida ? 'concluida' : ''}`}>
        <div className="conteudo">
          <h3>{tarefa.titulo}</h3>
          <p>{tarefa.descricao}</p>
          <p className={`prioridade-texto ${tarefa.prioridade.toLowerCase()}`}>
            Prioridade: {tarefa.prioridade}
          </p>
        </div>

        <select value={tarefa.prioridade} onChange={(e) => aoAlterarPrioridade(tarefa.id, e.target.value)} className="prioridade">
          <option value="Alta">Prioridade Alta</option>
          <option value="Media">Prioridade Média</option>
          <option value="Baixa">Prioridade Baixa</option>
        </select>

        <button onClick={abrirModal} className="botao-excluir">Excluir</button>

        <button onClick={() => aoClicar(tarefa.id)} className="botao">
          {tarefa.concluida ? <span>✓ Concluída</span> : <span>Concluir</span>}
        </button>
      </div>
       
      {/*Aqui Declaramos que so vai mostrar o modal se mostrarmodal for True*/}
      {mostrarModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar exclusão</h5>
                <button type="button" className="btn-close" onClick={fecharModal}></button>
              </div>
              <div className="modal-body">
                <p>Tem certeza que deseja excluir essa tarefa?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={fecharModal}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-danger" onClick={excluirTarefa}>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemTarefa;


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
    setPrioridade('Media'); //Iniciamos a prioridade como media 
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
