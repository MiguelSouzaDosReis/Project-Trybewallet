import { createStore } from 'redux';
import reducerCombinado from '../reducers';

const store = createStore(reducerCombinado,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
