import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';


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
      </Switch>
      <hr/>
      <footer>
todos os direitos reservados...
      </footer>
    </BrowserRouter>
  );
}

export default App;
