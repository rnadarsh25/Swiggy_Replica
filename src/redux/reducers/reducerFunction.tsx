import * as actions from '../actions/types';
const initialState = {
  allData: [],
  menus: [],
  theRestaurant: {},
  order: [],
  checkUser: false,
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
    case 'GET_RESTAURANT_ASYNC':
      return {
        ...state,
        theRestaurant: action.value,
      };
    case 'ADD_ORDER_ASYNC':
      return {
        ...state,
        order: action.value,
      };
    case 'CHECK_USER_ASYNC':
      return {
        ...state,
        checkUser: true,
      };
    default:
      return state;
  }
}
