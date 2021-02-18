import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.personState.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personState: state.person.persons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdd: (name, age) =>
      dispatch({ type: actionTypes.PERSONADD, personData: { name, age } }),
    onPersonDelete: (id) =>
      dispatch({ type: actionTypes.PERSONDELETE, value: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
