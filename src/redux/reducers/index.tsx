import { combineReducers } from 'redux';
import reducerFunction from './reducerFunction';
export default combineReducers({
  data: reducerFunction,
});
