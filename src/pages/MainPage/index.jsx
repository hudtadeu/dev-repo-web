import React from "react";

import "./styles.css";

const MainPage = () => {
  const handleLogout = () => {
    console.log('logout');
  }

  const handleSearch = (query) => {
    console.log('query', query);
  }

  const handleClear = () => {
    console.log('clear');
  }

  const handleDeleteRepo = () => {
    console.log('delete repo');
  }

  return (
    <div id="main">
      <div className="nav">
        <h1 className="logo">SisRepo</h1>
        <button onClick={handleLogout}>Sair</button>
      </div>

      <div className="search">
        <label htmlFor="query">Procurar:</label>
        <input type="search" name="query" id="query" />
        <button onClick={handleClear}>Limpar</button>
        <button onClick={handleSearch}>Procurar</button>
      </div>

      <div className="repositories">
        <h2 className="title">Repositórios</h2>

        <ul className="list">
          <li className="item">
            <div className="info">
              <div className="owner">facebook</div>
              <div className="name">react</div>
            </div>
            <button>Apagar</button>
          </li>

          <li className="item">
            <div className="info">
              <div className="owner">facebook</div>
              <div className="name">react-native</div>
            </div>
            <button onClick={handleDeleteRepo}>Apagar</button>
          </li>

        </ul>

        <div className="new">
          <label htmlFor="new-repo">Novo Repo:</label>
          <input type="url" name="new-repo" id="new-repo" />
          <button>Adicionar</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage;