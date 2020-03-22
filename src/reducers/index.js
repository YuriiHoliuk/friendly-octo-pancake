import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import data from './data';
import finish from './finish';

const createRootReducer = () => combineReducers({
  data,
  form: formReducer,
  finish,
});

export default createRootReducer;
