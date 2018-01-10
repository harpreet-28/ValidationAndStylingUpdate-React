import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import UserInput from './User/UserInput.js';
import UserOutput from './User/UserOutput.js';
import ValidationInput from './validation/ValidationInput.js';
import ValidationOutput from './validation/ValidationOutput.js';
import Char from './Char/Char';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';

class App extends Component {
  state = {
    persons:[
      {id:'asd23', name:'Max', age:28},
      {id:'1234', name:'Manual', age:32},
      {id:'asdf', name:'Stephanie', age:29}
    ],
    user: [
      {username: 'preet'},
      {username: 'jazz'}
    ],
    showPersons: false,
    inputLength: "",
    validatedText: "",
    charValue: ""
  }

  // switchNameHandler=(newName)=>{
  //   // console.log("switchNameHandler executed!!")
  //   this.setState({
  //     persons:[
  //     {name: newName, age:28},
  //     {name:'Manual', age:32},
  //     {name:'Stephanie', age:25}
  //   ]
  //   })
  // }

  nameChangedHandler=(event, id)=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  usernameChangedHandler=(e)=>{
    this.setState({
      user: [
        {username: e.target.value},
        {username: 'Jazz'}
      ]
    })
  }
  deletePersonHandler=(personIndex)=>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

//handler created to display the value of input text entered!!
  inputLengthHandler = (evt) => {
   const inputVal = evt.target.value;
   this.setState({inputLength:inputVal})
  }


//handler created to display the length of the value entered from ValidationInput.
  ValidatedLengthHandler=(e)=>{
    const updateValidatedText = e.target.value.length;
    this.setState({validatedText: updateValidatedText})
  }


  //handler created to enter the value for Char List.
  charInputHandler = (event) => {
   this.setState({charValue:event.target.value})
  }

  //below handler created to remove a charList item using key index.
  charDeleteHandler = (index) => {
    const text = this.state.charValue.split("")
    text.splice(index,1);
    const updatedText = text.join("");
    this.setState({charValue:updatedText});
  }

  render() {




    //below function is created to convert charValue String into array using Spilt() and then iterate over the array using map()
    const charList = this.state.charValue.split("").map((ch, index)=>{
      return <Char 
              character={ch} 
              key={index} 
              Clicked={ () => this.charDeleteHandler(index) }/>
    });

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
        return <ErrorBoundary key={person.id}> 
        <Person 
        click={()=> this.deletePersonHandler(index)}
        name={person.name} 
        age={person.age} 
        
        changed={(event)=>this.nameChangedHandler(event, person.id)} />
        </ErrorBoundary>
      })}
          
       </div>
      );
       btnClass = classes.Red;
    };

    const outputStyle ={
      border: '1px solid blue',
      backgroundColor:'pink',
      color: 'yellow'
    }
    
   

    //adding dynamic styling with different classes
    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
    
    return (
   
      <div className={classes.App}>
        <h1>React Validations and Styling</h1>
        
        <button 
        className={btnClass}
        onClick={this.togglePersonHandler}>Switch</button>
        <div>
          <p className={assignedClasses.join(" ")}>Click on Element to Remove it from the List Below</p>
        </div>
        {persons}

        <hr />
        <UserInput username={this.usernameChangedHandler.bind(this)}/>
        <UserOutput 
        style={outputStyle}
        username1={this.state.user[0].username} 
        username2={this.state.user[1].username}/>
        <hr />
        <div>
        <input type="text" placeholder="Exercise 2"  onChange={this.inputLengthHandler.bind(this)} />
        <p>Input Text:: {this.state.inputLength}</p>
        </div>
        <hr />

        <ValidationInput displayText={this.ValidatedLengthHandler.bind(this)}/>
        <ValidationOutput displayTextLength={this.state.validatedText} />

        <hr />
        <input type="text" placeholder="Exercise 4" onChange={this.charInputHandler.bind(this)} />
        {charList}
       
      </div>
    
    );
  }
}

export default App;
