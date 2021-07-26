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

import { fetchAnyData } from '../api/getData';
import { ListItemSecondaryAction } from '@material-ui/core';

async function getData(func: any, url: string) {
  const res = await func(url);
  if (res.ok) {
    return await res.json();
  }
  throw new Error('something went wrong');
}

async function getDataFromStore() {
  const items: any[] = [];
  const ref = await firebase.firestore().collection('restaurants');
  ref.onSnapshot((queryShot) => {
    queryShot.forEach((doc) => {
      items.push(doc.data());
    });
  });

  return items;
}

function* getDataAsync(): any {
  try {
    // const data = yield getData(fetchAnyData, 'http://localhost:3000/data.json');

    const items = yield getDataFromStore();

    yield put({ type: 'GET_DATA_ASYNC', value: items });
  } catch (e) {
    console.log(e);
  }
}

function* getMenusAsync(action: any): any {
  try {
    const data = yield getData(fetchAnyData, 'http://localhost:3000/data.json');

    const menuRef = firebase.firestore().collection('menus');
    let menuItems: any[] = [];

    menuRef
      .where('restaurantId', '==', action.theID)
      .onSnapshot((queryShot) => {
        queryShot.forEach((doc) => {
          menuItems.push(doc.data());
        });
      });

    console.log();

    const menusOfID = data.menus.filter(
      (menu: any) => menu.restaurantId === action.theID
    );

    yield put({ type: 'GET_MENUS_ASYNC', value: menuItems });
  } catch (e) {
    console.log(e);
  }
}

function* getRestaurantAsync(action: any): any {
  try {
    let item: any;
    const ref = firebase.firestore().collection('restaurants');
    ref.where('id', '==', action.theID).onSnapshot((queryShot) => {
      queryShot.forEach((docs) => {
        item = docs.data();
      });
    });

    const data = yield getData(fetchAnyData, 'http://localhost:3000/data.json');

    const theRestaurant = data.restaurants.filter(
      (resta: any) => resta.id === action.theID
    )[0];

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
    yield put({ type: 'CHECK_USER_ASYNC' });
  } catch (e) {
    console.log(e);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery('GET_DATA', getDataAsync),
    takeLatest('GET_MENUS', getMenusAsync),
    takeLatest('GET_RESTAURANT', getRestaurantAsync),
    takeEvery('ADD_ORDER', addOrderAsync),
    takeEvery('CHECK_USER', checkUserAsync),
  ]);
}
