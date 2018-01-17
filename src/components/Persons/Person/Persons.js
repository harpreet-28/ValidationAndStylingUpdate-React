import React from 'react';
import Person from './Person.js';

const persons = (props)=> props.persons.map((person, index) => {
        return  
        <Persons
        click={ () => props.clicked(index)}
        name={person.name} 
        age={person.age} 
        key={person.id} 
        changed={(event)=>props.changed(event, person.id)} />
        
      });
    


export default persons;