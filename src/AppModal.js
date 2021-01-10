import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';

import styled from 'styled-components';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleBtnClick(){
    setModalVisible(true);
  }
  
  return(
    <>     
      <button onClick={handleBtnClick} >Abrir</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>testando 123...</h1>
      </Modal>
    </>
  );
}

export default App;
