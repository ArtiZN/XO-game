import React from 'react'

function LeftPanel(props){

    const Styles = {
        button: {
            width: '200px',
            height: '100px',
            fontSize: 30,
        },
    }

    return(
        
        
        <div style={{marginLeft: '250px'}}>
            <div style={{marginTop: '200px'}}/>
            <div style={{display: 'flex'}}>
             <div style={{fontSize: 40}}>{props.whoMoves()}</div>
             <div style={{fontSize: 20, paddingTop: '15px', paddingLeft: '15px'}}>TO MOVE</div>
            </div>
            
            <div style={{marginTop: '200px'}}/>
            <button style={Styles.button} onClick={props.reset}>restart</button>
        </div>
          
     
    )
}

export default LeftPanel