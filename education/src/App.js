import React, { useState } from 'react';
import DrawBoard from './Actions/DrawBoard'
import './App.css';
import MovesBoard from './Actions/MovesBoard';

function App() {

  const [board, setBoard] = useState([
    {id: 0, value: 0}, {id: 1, value: 0}, {id: 2, value: 0},
    {id: 3, value: 0}, {id: 4, value: 0}, {id: 5, value: 0},
    {id: 6, value: 0}, {id: 7, value: 0}, {id: 8, value: 0},
  ])

  const [temp, setTemp] = useState(1) //if true it's 'X' turn, else it's 'O' turn

  

  function changeX(id){
    return setBoard(board.map(element=>{
      if (element.id === id){
        element.value=1
      }
      return element;
      
    }))
  }
  function changeO(id){
    return setBoard(board.map(element=>{
      if (element.id === id){
        element.value=2
      }
      return element;
      
    }))
  }
  function resetBoard(){
    setTemp(1)
    setBoard(board.map(element=>{
      element.value=0
      return element
    })
    )
  }


  const getValues = function() {
    return board.map(element=>{
      return  element.value;
    })
  }

  return (
      <>
        <div style={{display: 'flex'}}>
          <div id='left'>

          </div>

          <div id='middle'>
           <DrawBoard 
              Board={board} Values={getValues} 
              turn={temp} setTurn={setTemp} setBoard={setBoard} 
              changeX={changeX} changeO={changeO} 
              resetBoard={resetBoard}
            />
          </div>

          <div id='right'>
            <MovesBoard/>
          </div>

        </div>
       
      </>
  );
}

export default App;
