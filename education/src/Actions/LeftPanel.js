import React from 'react'

function LeftPanel(props){

    const Styles = {
        button: {
            width: '200px',
            height: '100px',
            fontSize: 30,
            backgroundColor: 'black',
            color: 'white'
        },
    }

    return(        
        <div style={{marginLeft: '250px'}}>

            <div style={{marginTop: '200px'}}/>

            <div style={{display: 'flex'}}>

                {props.winner === 0 && 
                <>
                    <div style={{fontSize: 40}}>{props.whoMoves()}</div>
                    <div style={{fontSize: 20, paddingTop: '15px', paddingLeft: '15px'}}>TO MOVE</div>
                </>}

                {props.winner === 1 && <div style={{fontSize: 40}}>X WINS</div>}
                {props.winner === 2 && <div style={{fontSize: 40}}>O WINS</div>}
                {props.winner === 3 && <div style={{fontSize: 40}}>DRAW</div>}

             
            </div>
            
            <div style={{marginTop: '200px'}}/>
            <button style={Styles.button} onClick={props.reset}>restart</button>
        </div>   
    )
}

export default LeftPanel