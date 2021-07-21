import { combineReducers } from 'redux';
import reducerFunction from './reducerFunction';
const rootReducer = combineReducers({
  data: reducerFunction,
});

export default rootReducer;
