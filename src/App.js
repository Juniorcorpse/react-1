import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import styled from 'styled-components';



function App() {

  const [searchText, setSeachText] = useState('');
  function handleSearchInput(novoTexto){
    setSeachText(novoTexto);
  }
  
 
  return(
    <>
      <h1>Lista de tarefas</h1>
      <SearchBox 
        frasePadrao="email..."
        onChangeText={handleSearchInput}
      />  
      <SearchBox 
        frasePadrao={searchText}
       
      />     
      <hr/>
      Texto procurado {searchText}
    </>
  );
}

export default App;
