import React from 'react'

function MovesBoard(props){
    let Styles = {
        marginDiv: {
            height: '170px',
            textAlign: 'right',
            
        },
        lineDiv : {
            display: 'flex',
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
        },
        select: {
            color: '#FF5722',
            width : '110px',
            height: '30px',
            backgroundColor: '#FFECB3',
            borderRadius: '50px 50px',
            margin: '15px',
            fontSize: 20,
            boxShadow: '12px 12px 2px 1px rgba(0, 0, 255, .2)',
        },
        option: {
            fontSize: 20,
            color: '#FF5722',
            backgroundColor: '#FFECB3',
        },
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
            {/* currently has no use */}
            <div style={Styles.marginDiv}>
                {/* <select style={Styles.select}>
                    <option style={Styles.option} hidden defaultValue='Option'>Option</option>
                    <option style={Styles.option} value='LogIn'>Log in</option>
                    <option style={Styles.option} value='SignUp'>Sign up</option>
                    <option style={Styles.option} value='LogOut'>Log Out</option>
                    <option style={Styles.option} value='Settings'>Settings</option>
                </select> */}
            </div>
            {/**/}
            {/* table to show moves */}
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
            {/* table ends */}    
        </>
    )
}

export default MovesBoard

