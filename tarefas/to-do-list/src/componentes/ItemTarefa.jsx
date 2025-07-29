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
