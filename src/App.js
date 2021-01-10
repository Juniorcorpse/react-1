import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';


function App() {
  
  return(
    <BrowserRouter>
      <header>
        <h1>Meu site</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" >HOME</Link>
            </li>
            <li>
              <Link to="/sobre" >SOBRE</Link>
            </li>
            <li>
              <Link to="/categoria/esportes" >Esportes</Link>
            </li>
            <li>
              <Link to="/categoria/noticias" >Notícias</Link>
            </li>
            <li>
              <Link to="/categoria/viagens" >Viagens</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr/>
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/sobre">
         <Sobre />
        </Route>
        <Route path="/categoria/:cat">
         <Categoria />
        </Route>
      </Switch>
      <hr/>
      <footer>
todos os direitos reservados...
      </footer>
    </BrowserRouter>
  );
}

export default App;
