import React, { useState } from 'react';
import './App.css'

function App() {
  const [tarefa, setTarefa] = useState('');
  const [itensLista, setItensLista] = useState([]);

  const [theme, setTheme] = useState('claro')

  const handleThemeChange = () => {
    setTheme(theme === 'claro' ? 'escuro' : 'claro');
  }

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
    <div className={`theme-switcher ${theme}`}>

      <h1>Selecione o tema</h1>
      <button onClick={handleThemeChange}>
        Tema: {theme === 'claro' ? 'escuro' : 'claro'}
      </button>
      
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


export default App;


