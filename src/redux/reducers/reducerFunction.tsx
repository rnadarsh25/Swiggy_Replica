import * as actions from '../actions/types';
const initialState = {
  allData: [],
};
export default function (state = initialState, action: any) {
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        allData: action.payload.data,
      };
    default:
      return state;
  }
}
