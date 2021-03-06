import * as actionTypes from '../action';

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PERSONADD:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.PERSONDELETE:
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.value),
      };

    default:
      break;
  }
  return state;
};

export default reducer;
