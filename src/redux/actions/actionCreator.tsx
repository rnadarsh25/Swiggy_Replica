import * as actions from './types';
import { Dispatch } from 'redux';

export const getData = () => (dispatch: any) => {
  dispatch({ type: actions.GET_DATA });

  // fetch('./restaurants.json')
  //   .then((res) => res.json())
  //   .then((data) =>
  //     dispatch({
  //       type: actions.GET_DATA,
  //       payload: {
  //         data,
  //       },
  //     })
  //   )
  //   .catch((err) => console.log(err));
};

export const fetchMenuWithID = () => (dispatch: Dispatch) => {
  fetch('./menu.json')
    .then((res) => res.json())
    .then((menus) =>
      dispatch({
        type: actions.GET_MENUS,
        payload: {
          menus,
        },
      })
    )
    .catch((e) => console.log(e.message));
};

export const fetchDataSaga = () => (dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_DATA_SAGA' });
};
