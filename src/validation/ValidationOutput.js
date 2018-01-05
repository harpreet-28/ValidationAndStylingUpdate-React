import React from 'react';

const ValidationOutput = (props) => {
			// console.log(props)
		
		return(

			<div>
				{
					props.displayTextLength <= 5 ?
					<p>Text Too Short!</p> :
					<p>Text Long Enough!</p>
				}
			</div>
				
			)
	
}
export default ValidationOutput;