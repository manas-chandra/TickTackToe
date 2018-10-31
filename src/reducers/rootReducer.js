import { combineReducers } from 'redux';
import boardReducer from './tick';

const rootReducer = combineReducers({
  tick: boardReducer
});

export default rootReducer;
