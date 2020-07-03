import React from 'react'

function LeftPanel(props){
    let winner = props.winner 

    const Styles = {
        button: {
            width: '200px',
            height: '100px',
            fontSize: 30,
            backgroundColor: '#FFECB3',
            color: 'black'
        },
        font40: {
            fontSize: 40
        },
        toMove: {
            fontSize: 20, 
            paddingTop: '15px', 
            paddingLeft: '15px'
        }
    }

    return(        
        <div style={{marginLeft: '250px'}}>

            <div style={{marginTop: '200px'}}/>

            <div style={{display: 'flex', color: '#FFECB3'}}>

                {winner === 0 && 
                <>
                    <div style={Styles.font40}>{props.whoMoves()}</div>
                    <div style={Styles.toMove}>TO MOVE</div>
                </>}

                {winner === 1 && <div style={Styles.font40}>X WINS</div>}
                {winner === 2 && <div style={Styles.font40}>O WINS</div>}
                {winner === 3 && <div style={Styles.font40}>DRAW</div>}

             
            </div>
            
            <div style={{marginTop: '200px'}}/>
            <button style={Styles.button} onClick={props.reset}>restart</button>
        </div>   
    )
}

export default LeftPanel