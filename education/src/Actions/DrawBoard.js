import React, { useState }/*, {useState}*/ from 'react'
import X3 from '../X3.mp3'
import O3 from '../O3.mp3'


function DrawBoard(props){

    const size = 150;
    
    const Xes = [X3]
    const Os = [O3]

    const [P1, setP1] = useState(0)
    const [P2, setP2] = useState(0)
    
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
            fontSize: 24
        },
        numbers: {
            paddingTop: `${size/3 + 15}px`,
            fontSize: 24,
            marginRight: '5px'
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
        }
    }

    const changedBorder ={
        ...Styles.linebox50, borderTop: '1px solid grey'
    }

    function AudioPlay (array){
        var randomNumber = Math.floor(Math.random()*array.length)
        var audio = new Audio(array[randomNumber]);
        audio.play();
    }

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

                    }    
                    else if (values[a]===2){
                        props.gameisOn(false) //disallow further moves
                        props.setWinner(2) //O wins  
                        setP2(P2+1)
                    }    
                }   
            }
    }

    function endGame(){
            let values = props.Values()
            
            if (winCondition() && values.every(element => {
               return element!==0
            })) {            
                props.setWinner(3) //it's a draw
                setP1(P1+0.5)
                setP2(P2+0.5)
                props.gameisOn(false) //disallow further moves
            }
    }

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
   
    function renderElement(Element){
            switch(Element){
                case 1: return 'X'
                case 2: return 'O'
                default: return  
            }
    }  
    
    return (
        <div style={Styles.body}>
            <div style={Styles.div}>
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
            </div>              
        </div>
    )
}

export default DrawBoard
