import React from 'react';

import classes from './Cockpit.css';
const cockpit = (props) =>{
	const assignedClasses = [];

	let btnClass = '';
	if(props.showPersons){
		btnClass = classes.Red;
	}

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
	return(
			<div className={classes.Cockpit}>
				  <h1>React Validations and Styling</h1>
			       <button 
			       className={btnClass}
			       onClick={props.clicked}>Switch</button>
			       <div>
			        	<p className={assignedClasses.join(" ")}>Click on Element to Remove it from the List Below</p>
			       </div>
			</div>
		)
}

export default cockpit;