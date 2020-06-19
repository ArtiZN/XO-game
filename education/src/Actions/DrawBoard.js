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
            width: `${3*size}`,
            height : `${size}px`
            
        },
        
        body : {
            
            height : `${3*size}px`,
            width: `${3*size}`,
        },
    }

    function renderElement(Element){
        
            switch(Element){
                case 1: return <button style={Styles.button}>X</button>
                case 2: return <button style={Styles.button}>O</button>
                default: return  <button style={Styles.button}></button>
            }
        
    }
        
    
    
    return (
        <div className='main' style={Styles.body}>
            <div style={Styles.div}>
                {renderElement(props.Values()[0])}
                {renderElement(props.Values()[1])}
                {renderElement(props.Values()[2])}
            </div>
            <p style={{margin:  '0px', padding: '0px'}}/>
            <div style={Styles.div}>
                {renderElement(props.Values()[3])}
                {renderElement(props.Values()[4])}
                {renderElement(props.Values()[5])}
            </div>
            <p style={{margin:  '0px', padding: '0px'}}/>
            <div style={Styles.div}>
                {renderElement(props.Values()[6])}
                {renderElement(props.Values()[7])}
                {renderElement(props.Values()[8])}
            </div>
                    
        </div>
    )
        
    
    
}

export default DrawBoard