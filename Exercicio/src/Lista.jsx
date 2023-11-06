import React, { useState } from 'react';
import './Lista.css'

function Lista() {
    const [tarefa, setTarefa] = useState('');
    const [itensLista, setItensLista] = useState([]);

    function handleChangeInput(event) {
        const inputTarefa = event.target.value;

        setTarefa(inputTarefa);
    }

    function adicionarNaLista(event) {
        event.preventDefault();

        if (!tarefa) {
            return;
        }

        setItensLista([...itensLista, tarefa]);
        setTarefa('');
    }

    function excluirItem(index) {
        const novosItens = [...itensLista];
        novosItens.splice(index, 1);
        setItensLista(novosItens);
    }

    return (
        <div className="fundo">
            <h1>Lista de tarefas</h1>
            <form onSubmit={adicionarNaLista}>
                <input
                    type="text"
                    placeholder="Adicione uma tarefa"
                    onChange={handleChangeInput}
                    value={tarefa}
                />

                <button type="submit"> Adicionar </button>
            </form>

            <ul className="lista">
                {itensLista.map((item, index) => (
                    <li key={index}>{item}
                        <button onClick={() => excluirItem(index)}>Excluir</button>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default Lista;


