/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import logo from './logo.svg';
import './App.css';

import moon from './static/img/luna.png';
import astronauta from './static/img/astronauta.png';
// import marte from './static/img/marte.png';
import satelite from './static/img/satelite.png';


function App() {
  return (
    <div className="App">
      <img src={astronauta} style={{ display: 'none' }} />
      <header className="App-header">
        <div className="App-header-404" >
          <h1>4</h1>
          <img src={moon} className="App-logo" alt="Luna" />         

          <h1>4</h1>
        </div>

        {/* <img className="App-img-top-animation" alt="astronauta" src={astronauta} ></img> */}


        {/* <p>Explora la pagina y nos vemos en el */}
        <p>Houston, tenemos un problema ¡no está la página!</p>

        <button className="App-button"> Regresa a casa </button>

        {/* <img className="App-img-astronauta" src={astronauta} alt="astronauta" /> */}

        <div className="App-img-astronauta">
          {/* <p>ver</p> */}
        </div>

        <img className="App-img-satelite" src={satelite} alt="satelite" />

        {/* 
        <img className="App-img-astro" alt="masrte" src={marte} ></img>
        <img className="App-img-astro" alt="masrte" src={satelite} ></img> 
        */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
