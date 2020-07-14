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
            borderRadius: '50px 50px 0px 0px',
            width: '250px',
            height: '500px',
            border: '4px solid black',
            color: 'black',
            backgroundColor: '#FFECB3',
            boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)'
        },
        innerDiv: {
            width: '123px',
            height: '30px',          
            borderRadius: '50px',
            textAlign: 'center',
            paddingTop: '5px',         
        },
        movesDiv: {
            width: '50%',
            height: '461px',           
        },
        li: {
            color: '', 
            backgroundColor: '#FFA000',
            width: '100%',
            height: `20%`,
            textAlign: 'center',
            fontSize: 30,
            border: '0.4px solid grey',
        },
        ul: {
            height: '100%', 
            margin: '0px',
            paddingLeft: '0px',
            width: '100%'
        }
    }

    function drawMoves(array){
       
        return array.map(element=>{
            return <li key={element.id} style={Styles.li} type='none'>
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
                        <ul style={Styles.ul}>
                         {drawMoves(props.Xmoves)}
                        </ul>                  
                    </div>
                    <div style={Styles.movesDiv}>
                        <ul style={Styles.ul}>
                         {drawMoves(props.Omoves)}
                        </ul>       
                    </div>               
                </div>               
            </div>                  
        </>
    )
}

export default MovesBoard

