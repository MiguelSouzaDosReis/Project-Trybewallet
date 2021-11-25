// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CAMBIO, VALOR } from '../actions';

const InitialState = {
  valor: 0,
  cambio: 'BRL',
};

const reducerValor = (state = InitialState, action) => {
  switch (action.type) {
  case VALOR:
    return {
      ...state,
      valor: action.payload,
    };
  case CAMBIO:
    return {
      ...state,
      cambio: action.payload,
    };

  default:
    return state;
  }
};

export default reducerValor;
