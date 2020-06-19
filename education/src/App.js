import React, { useState } from 'react';
import DrawBoard from './Actions/DrawBoard'
import './App.css';

function App() {

  const [board, setBoard] = useState([
    {id: 1, value: null}, {id: 2, value: 1}, {id: 3, value: 2},
    {id: 4, value: null}, {id: 5, value: 2}, {id: 6, value: 1},
    {id: 7, value: 1}, {id: 8, value: null}, {id: 9, value: 1},
  ])
  
 


  const getValues = function() {
    return board.map(element=>{
      return  element.value;
    })
  }

  return (
      <DrawBoard Board={board} Values={getValues}/>
  );
}

export default App;
