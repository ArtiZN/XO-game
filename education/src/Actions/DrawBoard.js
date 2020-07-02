import React/*, {useState}*/ from 'react'
import X1 from '../X1.mp3'
import X2 from '../X2.mp3'
import X3 from '../X3.mp3'
import O1 from '../O1.mp3'
import O2 from '../O2.mp3'
import O3 from '../O3.mp3'


function DrawBoard(props){

    const size = 150;
    

    const Xes = [X1, X2, X3]
    const Os = [O1, O2, O3]
    
    const Styles = {
        clickableDiv : {
            width : `${size}px`,
            height : `${size}px`,
            backgroundColor: 'lime',
            marginRight : '5px',
            marginTop : '5px',
            fontSize: 90,
            textAlign : 'center',
            color: 'red',
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
        }

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
                        
                    }    
                    else if (values[a]===2){
                        props.gameisOn(false) //disallow further moves
                        props.setWinner(2) //O wins
                        
                    } 
                    
                }
                
            }
   
    }

    function endGame(){
            let values = props.Values()
            winCondition()
            if (values.every(element => {
               return element!==0
            })) {            
                props.setWinner(3) //it's a draw
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
                    
        </div>
    )

}

export default DrawBoard
