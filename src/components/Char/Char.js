import React from 'react';

const Char = (props) =>{
	const style ={
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black'

	}
	// console.log(props)
	return(	
		<div>
			<div style={style} onClick={props.Clicked}>
				{props.character}
			</div>
		</div>
		)
}
export default Char;