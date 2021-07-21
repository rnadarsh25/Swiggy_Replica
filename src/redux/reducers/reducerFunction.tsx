import * as actions from '../actions/types';
const initialState = {
  allData: [],
  menus: [],
  sagaData: [],
  value: 20,
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case 'GET_DATA_ASYNC':
      return {
        ...state,
        allData: action.value,
      };
    case 'GET_MENUS_ASYNC':
      return {
        ...state,
        menus: action.value,
      };
    case actions.FETCH_DATA_SAGA:
      return {
        ...state,
        // sagaData: action.payload.data,
      };
    case 'ADD_ASYNC':
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}
