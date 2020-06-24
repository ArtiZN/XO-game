import React/*, {useState}*/ from 'react'

function DrawBoard(props){

    const size = 150;

    

    const Styles = {
        button : {
            width : `${size}px`,
            height : `${size}px`
            
        },
        
        div : {
            display: 'inline-flex', 
            width: `${3*size}`,
            height : `${size}px`
            
        },
        
        body : {
            
            height : `${3*size}px`,
            width: `${3*size}`,
        },
        p: {
            margin: 0,
            fontSize: 200,
            marginTop: -40,
            marginLeft: -10,
        }
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

       winCondition()
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
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 0)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[0])}</p>
                </button>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 1)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[1])}</p>
                </button>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 2)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[2])}</p>
                </button>
            </div>

            <p style={{margin:  '0px'}}/>

            <div style={Styles.div}>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 3)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[3])}</p>
                </button>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 4)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[4])}</p>
                </button>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 5)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[5])}</p>
                </button>
            </div>

            <p style={{margin:  '0px'}}/>

            <div style={Styles.div}>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 6)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[6])}</p>
                </button>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 7)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[7])}</p>
                </button>
                <button style={Styles.button} onClick={(event)=>{return clicked(event, 8)}}>
                    <p style={Styles.p}>{renderElement(props.Values()[8])}</p>
                </button>
            </div>
                    
        </div>
    )

}

export default DrawBoard