import React, { useState } from 'react';
import './App.css';
import Home from './Containers/Home';
import Modal from './Containers/UI/Model/Model';

function App() {

  const [drop, setDrop] = useState(false);

  const cancleHandler = () => {
    setDrop(false); 
  }

  const addHandler = () => {
    setDrop(true); 
  }


  return (
    <div>
      <Modal show={drop} modalClosed={cancleHandler}/>
      <Home add={addHandler}/>
    </div>
  );
}

export default App;
