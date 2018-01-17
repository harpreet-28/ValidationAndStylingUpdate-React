import React from 'react';
// import './UserOutput.css';

const UserOutput = (props)=>{
    const style = {
        color: 'blue',
        background: 'lightgrey',
        width: '60%',
        border: '1px solid black',
        margin: '10px 0px auto 180px'
    }
    return(
             <div className="users" >
                <p style={style}>{props.username1}</p>
                 <p style={style}>{props.username2}</p>
            </div>
    )
}

export default UserOutput;