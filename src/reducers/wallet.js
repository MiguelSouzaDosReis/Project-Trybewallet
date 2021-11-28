// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { RECEBER_API } from '../actions/fetch';

const InitialState = {
  currencies: {},
  expenses: [],

};

const reducerValor = (state = InitialState, action) => {
  switch (action.type) {
  case RECEBER_API:
    return {
      ...state,
      currencies: action.payload,
    };

  default:
    return state;
  }
};

export default reducerValor;
