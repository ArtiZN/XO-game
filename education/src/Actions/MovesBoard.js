import React from 'react'

function MovesBoard(props){
    let Styles = {
        marginDiv: {
            paddingTop: '170px',
        },
        lineDiv : {
            display: 'flex'
        },
        scoreDiv: {
            width: '250px',
            height: '500px',
            border: '4px solid black',
            color: 'black',
            backgroundColor: 'white'

        },
        innerDiv: {
            width: '123px',
            height: '30px',
            border: '1px solid black',
            textAlign: 'center',
            paddingTop: '5px'
        },
        movesDiv: {
            width: '50%',
            height: '461px',
            border: '1px solid black',
        }
    }

   

    function drawMoves(array){
       
        return array.map(element=>{
            return <li key={element.id}>
                     {element.str}
                    </li>
            
            
        })
    }
  

    return (
        <>
       
            <div style={Styles.marginDiv}/>

            <div style={Styles.scoreDiv}> 
                <div style={Styles.lineDiv}>
                    <div style={Styles.innerDiv}>
                        X:
                    </div>
                    <div style={Styles.innerDiv}>
                        O:
                    </div>
                </div>      
                <div style={Styles.lineDiv}>
                    <div style={Styles.movesDiv}>
                        <ul>
                         {drawMoves(props.Xmoves)}
                        </ul>
                        
                    </div>
                    <div style={Styles.movesDiv}>
                        <ul>
                         {drawMoves(props.Omoves)}
                        </ul>
                        
                    </div>
                

                </div>
                
            </div>
                    
        </>
    )
}

export default MovesBoard

