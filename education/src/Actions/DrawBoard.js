import React, { useState, useEffect }from 'react'
import X1 from '../X1.mp3'
import X2 from '../X2.mp3'
//import X3 from '../X3.mp3'
import O1 from '../O1.mp3'
import O2 from '../O2.mp3'
//import O3 from '../O3.mp3'


function DrawBoard(props){

    const size = 150;
    
    const Xes = [X1, X2, /*X3*/] //sounds for X moves, sounds can be added or removed
    const Os = [O1, O2, /*O3*/]  //sounds for O moves, sounds can be added or removed 

    const [P1, setP1] = useState(0) //number of player 1 victories
    const [P2, setP2] = useState(0) //number of player 2 victories

    //hook for saving info after the page is reloaded
    useEffect(()=>{
        let raw = localStorage.getItem('P1')
        setP1(JSON.parse(raw))
        raw = localStorage.getItem('P2')
        setP2(JSON.parse(raw))
    },[])
    //inputing data into local storage
    useEffect(()=>{
        localStorage.setItem('P1', JSON.stringify(P1))
        localStorage.setItem('P2', JSON.stringify(P2))     
    },[P1, P2])
    
    //local styles, used into this component
    const Styles = {
        clickableDiv : {
            width : `${size}px`,
            height : `${size}px`,
            backgroundColor: '#FFECB3',
            marginRight : '5px',
            marginTop : '5px',
            fontSize: 90,
            textAlign : 'center',
            color: '#FF5722',
            boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
        },
        div : {
            display: 'flex',      
        },
        letters: {
            width : `${size/2 +5}px`,
            paddingLeft: `${size/2}px`,
            fontSize: 24,
            color: '#FFECB3',
        },
        numbers: {
            paddingTop: `${size/3 + 15}px`,
            fontSize: 24,
            marginRight: '5px',
            color: '#FFECB3'
        },
        personalStats: {
            marginTop: '40px',
            marginLeft: '100px',
            width: '250px',
            height: '100px',
            backgroundColor: '#FFECB3',
            borderRadius: '50px',
            boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
            fontSize: 24
        },
        players: {
            width: '50%',
            textAlign: 'center',
            justifyContent: 'center',
            borderRight: '1px solid grey'
        },
        linebox50: {
            display: 'flex',
            height: '50%'
        },
        totalPoints:{
            textAlign: 'center',
            fontSize: 24,
            width: '50%'
        },
        resetButton: {
            width: '100px',
            height: '50px',
            borderRadius: '30px',
            margin: '10px 75px',
            backgroundColor: '#FFECB3',
            fontSize: 16,
        }
    }

    const changedBorder ={
        ...Styles.linebox50, borderTop: '1px solid grey'
    }
    //audio for every move
    function AudioPlay (array){
        var randomNumber = Math.floor(Math.random()*array.length)
        var audio = new Audio(array[randomNumber]);
        audio.play();
    }

    //determines if there's a winner
    function winCondition(){ 
        const wins = [
            [0, 1, 2], 
            [3, 4, 5],
            [6, 7, 8], 
            [0, 4, 8],
            [2, 4, 6], 
            [0, 3, 6],
            [1, 4, 7], 
            [2, 5, 8]
        ]
        const values = props.Values()
            for (let j=0; j<wins.length; j++){
                const [a, b, c] = wins[j];
                if ( 
                    values[a]===values[b] && 
                    values[b]===values[c] && 
                    values[a]===values[c] 
                ){
                    if (values[a]===1) {
                        props.gameisOn(false) //disallow further moves
                        props.setWinner(1)  //X wins
                        setP1(P1+1)
                        return true
                    }    
                    else if (values[a]===2){
                        props.gameisOn(false) //disallow further moves
                        props.setWinner(2) //O wins  
                        setP2(P2+1)
                        return true
                    }    
                    else if (true)
                    return false
                }   
            }      
    }

    //after the game is over gives point to each player and 
    //makes imposible to make further moves until the reset button is pressed
    function endGame(){
            let values = props.Values()
             if(!winCondition() && values.every(element => {
               return element!==0
            })) {            
                props.setWinner(3) //it's a draw
                setP1(P1+0.5)
                setP2(P2+0.5)
                props.gameisOn(false) //disallow further moves
            }
    }

    //reaction to clicks 
    function clicked(e, id){
        e.preventDefault();
        if (props.over){
            if (props.Values()[id]===0){
                props.changeValue(id) 
                if (props.turn===1) {
                  AudioPlay(Xes)
                }
                else {AudioPlay(Os)}
            }
            else alert('The field is not empty')                 
        endGame()
        }     
    }
   //writes X or O in an empty field when it's clicked
    function renderElement(Element){
            switch(Element){
                case 1: return 'X'
                case 2: return 'O'
                default: return  
            }
    }  

    //resets total score 
    function resetScore (){
        setP1(0)
        setP2(0)
    }
    
    return (
        <div style={Styles.body}>
            <div style={Styles.div}>
            {/* main board */}
                <div style={{width: '13px'}}/>
                <div style={Styles.letters}>
                    A
                </div >
                <div style={Styles.letters}>
                    B
                </div>
                <div style={Styles.letters}>
                    C
                </div>
            </div>
            <div style={Styles.div}>
                <div style={Styles.numbers}> 
                    3
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 0)}}>
                    {renderElement(props.Values()[0])}
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 1)}}>
                    {renderElement(props.Values()[1])}
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 2)}}>
                    {renderElement(props.Values()[2])}
                </div>
            </div>
            <div style={Styles.div}>
                <div style={Styles.numbers}> 
                    2
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 3)}}>
                    {renderElement(props.Values()[3])}
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 4)}}>
                    {renderElement(props.Values()[4])}
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 5)}}>
                    {renderElement(props.Values()[5])}
                </div>
            </div>
            <div style={Styles.div}>
                <div style={Styles.numbers}> 
                    1
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 6)}}>
                    {renderElement(props.Values()[6])}
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 7)}}>
                   {renderElement(props.Values()[7])}
                </div>
                <div style={Styles.clickableDiv} onClick={(event)=>{return clicked(event, 8)}}>
                   {renderElement(props.Values()[8])}
                </div>
            </div> 
            {/* score board */}
            <div style={Styles.personalStats}>
                <div style={Styles.linebox50}>
                    <div style={Styles.players}>
                        Player 1
                    </div>
                    <div style={Styles.totalPoints}>
                        {P1}
                    </div>
                </div>
                <div style={changedBorder}>         
                    <div style={Styles.players}>
                        Player 2
                    </div>
                    <div style={Styles.totalPoints}>
                        {P2}
                    </div>
                </div>
                <button style={Styles.resetButton} onClick={resetScore}>
                    Clear
                </button>        
            </div>                        
        </div>
    )
}

export default DrawBoard
