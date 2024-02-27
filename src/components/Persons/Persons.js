import { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('Inside Persons.js constructor');
    }

    componentWillMount() {
        console.log('Inside Persons.js componentWillMount');
    }

    componentDidMount() {
        console.log('Inside Persons.js componentDidMount');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Inside Persons.js shouldCOmponentUpdate', nextProps, nextState);
    //     return true;
    // }

    render() {
        console.log('Inside Persons.js render')
        return (
            this.props.persons.map((p, index) =>
            {
                return <Person
                name = {p.name}
                age = {p.age}
                key = {p.id}
                chintan = {() => this.props.clicked(index)} />
            })


        )
    }
}

export default Persons;