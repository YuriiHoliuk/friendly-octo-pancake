import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projects from './projects';
import finish from './finish';

const createRootReducer = () => combineReducers({
  projects,
  form: formReducer,
  finish,
});

export default createRootReducer;
