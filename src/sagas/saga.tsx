import * as actions from '../redux/actions/types';
import firebase from '../firebase';
import {
  takeLatest,
  takeEvery,
  all,
  put,
  delay,
  call,
  take,
} from 'redux-saga/effects';

import {
  fetchAnyData,
  getDataFromStore,
  getUser,
  newRegistration,
  getMenusFromStore,
  getRestaurantWithId,
} from '../api/getData';
import { ListItemSecondaryAction } from '@material-ui/core';

// async function getData(func: any, url: string) {
//   const res = await func(url);
//   if (res.ok) {
//     return await res.json();
//   }
//   throw new Error('something went wrong');
// }

function* getDataAsync(): any {
  try {
    const items = yield getDataFromStore();
    yield put({ type: 'GET_DATA_ASYNC', value: items });
  } catch (e) {
    console.log(e);
  }
}

function* getMenusAsync(action: any): any {
  try {
    const menuItems = yield getMenusFromStore(action.theID);
    yield put({ type: 'GET_MENUS_ASYNC', value: menuItems });
  } catch (e) {
    console.log(e);
  }
}

function* getRestaurantAsync(action: any): any {
  try {
    const item = yield getRestaurantWithId(action.theID);

    yield put({ type: 'GET_RESTAURANT_ASYNC', value: item });
  } catch (e) {
    console.log(e);
  }
}

function* addOrderAsync(action: any): any {
  try {
    const orderData = action.order;
    yield put({ type: 'ADD_ORDER_ASYNC', value: orderData });
  } catch (e) {
    console.log(e);
  }
}

function* checkUserAsync(action: any): any {
  try {
    if (action.user) {
      yield put({ type: 'CHECK_USER_ASYNC', value: action.user });
    } else {
      yield put({ type: 'NEW_USER_ASYNC' });
    }
  } catch (e) {
    console.log(e);
  }
}

function* addNewUserAsync(action: any): any {
  try {
    const inform = yield newRegistration(action.newUser);
    if (inform.res) {
      alert('User Added Successfully!!');
      yield put({ type: 'CHECK_USER_ASYNC', value: inform.data });
    } else {
      alert(inform);
    }
  } catch (e) {
    console.log(e);
  }
}

function* logoutAsync(): any {
  yield put({ type: 'LOGOUT_ASYNC' });
}

export function* rootSaga() {
  yield all([
    takeEvery('GET_DATA', getDataAsync),
    takeLatest('GET_MENUS', getMenusAsync),
    takeLatest('GET_RESTAURANT', getRestaurantAsync),
    takeEvery('ADD_ORDER', addOrderAsync),
    takeEvery('CHECK_USER', checkUserAsync),
    takeLatest('ADD_NEW_USER', addNewUserAsync),
    takeLatest('LOGOUT', logoutAsync),
  ]);
}
