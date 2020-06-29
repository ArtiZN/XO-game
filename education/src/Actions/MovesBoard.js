import React from 'react'

function MovesBoard(){
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
            asd
                    </div>
                    <div style={Styles.movesDiv}>
asd
                    </div>
                

                </div>
                
            </div>
                
            
        </>
    )
}

export default MovesBoard

