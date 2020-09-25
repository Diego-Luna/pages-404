import React from 'react';
import './App.css';

import moon from './static/luna.png';
import astronauta from './static/astronauta.png';
import satelite from './static/satelite.png';


function App() {
  return (
    <div className="App">
      <img alt="astronauta" src={astronauta} style={{ display: 'none' }} />
      <header className="App-header">
        <div className="App-header-404" >
          <h1>4</h1>
          <img src={moon} className="App-logo" alt="Luna" />
          <h1>4</h1>
        </div>

        <p>Houston, tenemos un problema ¡no está la página!</p>

        <button className="App-button"> Regresa a casa </button>

        <div className="App-img-astronauta">
        </div>

        <img className="App-img-satelite" src={satelite} alt="satelite" />
      </header>
    </div>
  );
}

export default App;
