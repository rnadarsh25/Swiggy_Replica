import * as actions from './types';

export const getData = () => (dispatch: any) => {
  fetch('./restaurants.json')
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: actions.GET_DATA,
        payload: {
          data,
        },
      })
    )
    .catch((err) => console.log(err));
};
