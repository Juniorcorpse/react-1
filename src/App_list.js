import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import styled from 'styled-components';



function App() {

  const [list, setList] = useState('');

  useEffect(()=>{
    setList([
      {title:'Comprar o bolo', done: false},
      {title:'pegar cachorro', done: true},
      {title:'Gravar aula', done: false}
    ]);
  }, []);
 
  function addItem(newItem){
      let newList = [ ...list, {title:newItem, done:false}]
      setList(newList);

  }
  
 function handleToggleDone(index){
  let newList = [ ...list ];
  newList[index].done = !newList[index].done;
  setList(newList);

 }
 
  return(
    <>
      <h1>Lista de tarefas</h1>
      <SearchBox 
        frasePadrao="add novo item..."
        onEnter={addItem}
      />  
        
      <hr/>
      
      <ul>
      {list.map((item, index)=>(
              <li key={index} onClick={()=>handleToggleDone(index)}>
              {item.done &&
                <del>{item.title} - {item.done.toString()}</del>
              }                        
              {!item.done &&
                item.title
              }
              </li>
            ))}
      </ul>

    </>
  );
}

export default App;
