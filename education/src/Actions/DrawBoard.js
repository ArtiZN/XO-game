import React/*, {useState}*/ from 'react'

function DrawBoard(props){

    const size = 150;

    

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
                        alert ('X wins')
                        setTimeout(props.resetBoard, 1000)
                    }    
                    else if (values[a]===2){
                        alert ('O wins')
                        setTimeout(props.resetBoard, 1000)
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
                alert('draw')
                setTimeout(props.resetBoard, 1000)
            }
    }
    
    

    function clicked(e, id){
        e.preventDefault();
        
        if (props.Values()[id]===0){
            if (props.turn===1){
                props.changeX(id)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(id)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')

       endGame()
    }
   


    function renderElement(Element){
        
            switch(Element){
                case 1: return 'X'
                case 2: return 'O'
                default: return  
            }
        
    }  
    
    return (

        <div className='main' style={Styles.body}>

            

            <div style={Styles.div}>
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
