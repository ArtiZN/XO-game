import React from 'react'

function DrawBoard(props){

    const size = 150;

    const Styles = {
        button : {
            width : `${size}px`,
            height : `${size}px`
            
        },
        div : {
            display: 'inline-flex',
            width: `${3*size}px`,
            height : `${size}px`
        
        }
    }

    function renderElement(index){
        switch(props.Board[index]){
            case 1: return 'X'
            case 2: return 'O'
            default: return  ''
        }
        
    }
    
    return (
        <>
        <div style={Styles.div} >
            <button style={Styles.button} name={props.Board[0]}/>           
            <button style={Styles.button} name={renderElement(1)} />          
            <button style={Styles.button} name={props.Board[2]} />         
        </div>
        <p style={{margin: '0'}}></p>
        <div style={Styles.div} >
            <button style={Styles.button}/>            
            <button style={Styles.button}/>         
            <button style={Styles.button}   />           
        </div>
        <p style={{margin: '0'}}></p>
        <div style={Styles.div} >
            <button style={Styles.button}/>                       
            <button style={Styles.button}/>              
            <button style={Styles.button}   />                        
        </div>
        </>
    )
        
    
    
}

export default DrawBoard