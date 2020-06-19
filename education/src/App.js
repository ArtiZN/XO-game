import React, { useState } from 'react';
import DrawBoard from './Actions/DrawBoard'
import './App.css';

function App() {

  const [board, setBoard] = useState([
    null, null, null, 
    null, null, null, 
    null, null, null, 
  ])



  return (
    <div className="main">
      <DrawBoard Board={board}/>
    </div>
  );
}

export default App;
