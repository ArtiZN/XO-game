import React, { useState, useEffect } from 'react';
import DrawBoard from './Actions/DrawBoard'
import './App.css';
import MovesBoard from './Actions/MovesBoard';
import LeftPanel from './Actions/LeftPanel';


function App() {

    

  const [board, setBoard] = useState([
    {id: 0, value: 0, str: 'A3'}, {id: 1, value: 0, str: 'B3'}, {id: 2, value: 0, str: 'C3'},
    {id: 3, value: 0, str: 'A2'}, {id: 4, value: 0, str: 'B2'}, {id: 5, value: 0, str: 'C2'},
    {id: 6, value: 0, str: 'A1'}, {id: 7, value: 0, str: 'B1'}, {id: 8, value: 0, str: 'C1'},
  ])

  const [Xmoves, setXmoves] = useState([]);
  const [Omoves, setOmoves] = useState([]);
  const [temp, setTemp] = useState(1) //if true it's 'X' turn to move, else it's 'O'
  const [game, setGame] = useState(true) //false if the game is over
  const [winner, setWinner] = useState(0) //winner of the game: 0 - not defined yet, 1 - X, 2 - O, 3 - draw

  useEffect(()=>{
    const raw = localStorage.getItem('myBoard')
    setBoard(JSON.parse(raw))
  },[])

  useEffect(()=>{
    localStorage.setItem('myBoard', JSON.stringify(board))
  },[board])

  
  function whoMoves(){
    if (temp===1) return 'X'
    else return 'O'
  }

  function changeValue(id){
    return setBoard(board.map(element=>{
      if (element.id === id){
        if (temp===1) {
          element.value=1
          setTemp(temp+1)
          setXmoves(Xmoves.concat(board[id]))
        }
        else{
          element.value=2
          setTemp(temp-1)
          setOmoves(Omoves.concat(board[id]))
        } 
      }
      return element;   
    }))
  }

  function resetBoard(){
    setTemp(1)
    setGame(true)
    setWinner(0)
    Xmoves.splice(0, Xmoves.length)
    Omoves.splice(0, Omoves.length)
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
        <div className='main'>
          <div id='left'>
            <LeftPanel
              whoMoves={whoMoves}
              reset={resetBoard}
              winner={winner}
            />
          </div>
          <div id='middle'>
           <DrawBoard 
              Board={board} 
              Values={getValues} 
              turn={temp} 
              setTurn={setTemp} 
              setBoard={setBoard} 
              changeValue={changeValue} 
              resetBoard={resetBoard}
              over={game}
              gameisOn={setGame}
              setWinner={setWinner}
            />
          </div>
          <div id='right'>
            <MovesBoard Xmoves={Xmoves} Omoves={Omoves}/>
          </div>
        </div>     
      </>
  );
}

export default App;
