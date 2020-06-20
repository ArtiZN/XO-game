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
        }
    }

    function clicked0(e){
        e.preventDefault();
        
        if (props.Values()[0]===0){
            if (props.turn===1){
                props.changeX(0)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(0)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked1(e){
        e.preventDefault();
        
        if (props.Values()[1]===0){
            if (props.turn===1){
                props.changeX(1)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(1)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked2(e){
        e.preventDefault();
        
        if (props.Values()[2]===0){
            if (props.turn===1){
                props.changeX(2)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(2)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked3(e){
        e.preventDefault();
        
        if (props.Values()[3]===0){
            if (props.turn===1){
                props.changeX(3)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(3)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked4(e){
        e.preventDefault();
        
        if (props.Values()[4]===0){
            if (props.turn===1){
                props.changeX(4)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(4)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked5(e){
        e.preventDefault();
        
        if (props.Values()[5]===0){
            if (props.turn===1){
                props.changeX(5)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(5)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked6(e){
        e.preventDefault();
        
        if (props.Values()[6]===0){
            if (props.turn===1){
                props.changeX(6)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(6)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked7(e){
        e.preventDefault();
        
        if (props.Values()[7]===0){
            if (props.turn===1){
                props.changeX(7)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(7)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
    }
    function clicked8(e){
        e.preventDefault();
        
        if (props.Values()[8]===0){
            if (props.turn===1){
                props.changeX(8)
                props.setTurn(props.turn+1)
            }
             else {
                 props.changeO(8)
                 props.setTurn(props.turn-1)
             }    
        }
       else alert('The field is not empty')
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
                <button style={Styles.button} onClick={clicked0}>
                    {renderElement(props.Values()[0])}
                </button>
                <button style={Styles.button} onClick={clicked1}>
                    {renderElement(props.Values()[1])}
                </button>
                <button style={Styles.button} onClick={clicked2}>
                    {renderElement(props.Values()[2])}
                </button>
            </div>

            <p style={{margin:  '0px'}}/>

            <div style={Styles.div}>
                <button style={Styles.button} onClick={clicked3}>
                    {renderElement(props.Values()[3])}
                </button>
                <button style={Styles.button} onClick={clicked4}>
                    {renderElement(props.Values()[4])}
                </button>
                <button style={Styles.button} onClick={clicked5}>
                    {renderElement(props.Values()[5])}
                </button>
            </div>

            <p style={{margin:  '0px'}}/>

            <div style={Styles.div}>
                <button style={Styles.button} onClick={clicked6}>
                    {renderElement(props.Values()[6])}
                </button>
                <button style={Styles.button} onClick={clicked7}>
                    {renderElement(props.Values()[7])}
                </button>
                <button style={Styles.button} onClick={clicked8}>
                    {renderElement(props.Values()[8])}
                </button>
            </div>
                    
        </div>
    )

}

export default DrawBoard