import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person.js';
import UserInput from '../components/User/UserInput.js';
import UserOutput from '../components/User/UserOutput.js';
import ValidationInput from '../components/validation/ValidationInput.js';
import ValidationOutput from '../components/validation/ValidationOutput.js';
import Char from '../components/Char/Char';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit';

// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';

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
    

    if (this.state.showPersons) {
      persons = (
      <div>

      <Persons 
      persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.nameChangedHandler}
      />    
       </div>
      );
    };

    const outputStyle ={
      border: '1px solid blue',
      backgroundColor:'pink',
      color: 'yellow'
    }
    
   

    //adding dynamic styling with different classes
    
    
    return (
   
      <div className={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons} 
        clicked={this.togglePersonHandler}/>
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
