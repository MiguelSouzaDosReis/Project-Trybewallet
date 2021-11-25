import { combineReducers } from 'redux';
import user from './user';
/* import wallet from './wallet'; */

const reducerCombinado = combineReducers({ user });

export default reducerCombinado;
