import { PureComponent } from "react";
import Persons from "../components/Persons/Persons";
import "./App.css";
import Radium from "radium";

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log ('Inside app.js constructor');
  }

  componentWillMount() {
    console.log('Inside app.ja componentWillMount');
  }

  componentDidMount() {
    console.log('Inside app.ja componentDidMount');
  }

  state = {
    persons: [
      { id:1, name: 'Chintan', age: 42 },
      { id:2, name: 'Akshad', age: 40 },
      { id:3, name: 'Krunal', age: 44 },
      { id:4, name: 'Sachin', age: 38 },
      { id:5, name: 'Anupam', age: 50 }
    ],
    showPersons: false
  }



  switchNameHandler = (newName) => {
    console.log("Button is Clicked");
    //this.state.person[0].name = 'XYZ';
    this.setState({
      persons: [
        { id:1, name: newName, age: 42 },
        { id:2, name: 'Akshad', age: 40 },
        { id:3, name: 'Krunal', age: 50 }
      ]
    })
  }


  nameChangeHandler = (event) => {
    this.setState({
      persons: [
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

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({persons:newPersons});
  }


  render() {
    console.log('inside app.js render method');
    const style = {
      backgroundColor: 'green',
      colo: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue',
        color: 'red'
     }, 
    };

    let persons = null;

    let classes = [];
    
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    //['red', 'bold'].join(' ');



    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler}/>
        
      </div>
      )
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'green',
        color: 'white'
      }
    }

    return (
      <div className='App'>
        <h1>My React App</h1>
        <p className={classes.join(' ')}> We are working with dynamic classes</p> 
        <button style={style} onClick={() => {this.togglePersonHandler(); }}>Click Here !!</button>
        {persons}
       
      </div>
    )
  }
}

export default Radium(App);