import React from 'react'

function DrawBoard(props){

    function showElement(index){
        switch(props.Board[index]){
            case 1: return 'X'
            case 2: return 'O'
            default: return  
        }
        
    }
    
    return (
        <p>Cisad</p>
    )
        
    
    
}

export default DrawBoard