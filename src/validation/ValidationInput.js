import React,{Component} from 'react';


export default class ValidationInput extends Component{
	render(){
		return(
		
			<input type="text" placeholder="Exercise 3" onChange={this.props.displayText} />

		)
	}
}