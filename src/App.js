import { Component } from "react";
import Person from "./Persons/Persons";
import "./App.css";

class App extends Component {

  state = {
    person: [
      { name: 'Chintan', age: 42 },
      { name: 'Akshad', age: 40 },
      { name: 'Krunal', age: 44 },
      { name: 'Sachin', age: 38 },
      { name: 'Anupam', age: 50 }
    ],
    showPersons: false
  }



  switchNameHandler = (newName) => {
    console.log("Button is Clicked");
    //this.state.person[0].name = 'XYZ';
    this.setState({
      person: [
        { name: newName, age: 42 },
        { name: 'Akshad', age: 40 },
        { name: 'Krunal', age: 50 }
      ]
    })
  }


  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: 'Chintan', age: 42 },
        { name: event.target.value, age: 40 },
        { name: 'Krunal', age: 50 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this. state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.person.map(p => {
              return <Person name={p.name} age= {p.age} />
            }
              )
          }
        
      </div>
      )
    }

    return (
      <div className='App'>
        <h1>My React App</h1>
        <button style={style} onClick={() => {this.togglePersonHandler(); }}>Click Here !!</button>
        {persons}
       
      </div>
    )
  }
}

export default App;