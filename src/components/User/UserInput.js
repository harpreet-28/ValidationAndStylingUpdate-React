import React, {Component} from 'react';

export default class UserInput extends Component{
    render = ()=>{
        const style = {
            marginTop: '50px'
        }
        return(
            <div>
                <input style={style} type="text" onChange={this.props.username} />
            </div>
        )
    }
}

/*const UserInput =(props)=>{
    return(
        <div>
             <input type="text" onChange={props.username} />
        </div>
    )
}

export default UserInput;*/