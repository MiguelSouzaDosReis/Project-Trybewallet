// Esse reducer será responsável por tratar as informações da pessoa usuária

import { EMAIL } from '../actions/index';

const InitialState = {
  email: '',
};

const reducerEmail = (state = InitialState, action) => {
  switch (action.type) {
  case EMAIL:
    return {
      ...state,
      email: action.payload,

    };

  default:
    return state;
  }
};

export default reducerEmail;
