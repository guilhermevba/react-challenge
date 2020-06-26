import React, { useState } from "react";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState(['Repositório 1'])
  async function handleAddRepository() {
    setRepositories(prevState => [...prevState, 'Desafio ReactJS'])  
  }

  async function handleRemoveRepository(id) {
    setRepositories(prevState => prevState.filter((item, index) => index !== id))
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository, index) => (
          <li key={index}>
            {repository}
            <button onClick={() => handleRemoveRepository(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
