import * as actions from '../redux/actions/types';
import {
  takeLatest,
  takeEvery,
  all,
  put,
  delay,
  call,
} from 'redux-saga/effects';

import { fetchAnyData } from '../api/getData';

async function getData(func: any, url: string) {
  const res = await func(url);
  console.log(res);
  if (res.ok) {
    return await res.json();
  }
  throw new Error('something went wrong');
}

function* getDataAsync(): any {
  try {
    const data = yield getData(fetchAnyData, 'http://localhost:3000/data.json');
    yield put({ type: 'GET_DATA_ASYNC', value: data.restaurants });
  } catch (e) {
    console.log(e);
  }
}

function* getMenusAsync(): any {
  try {
    const data = yield getData(fetchAnyData, 'http://localhost:3000/data.json');
    console.log(data);
    yield put({ type: 'GET_MENUS_ASYNC', value: data.menus });
  } catch (e) {
    console.log(e);
  }
}

export function* rootSaga() {
  yield all([
    takeEvery('GET_DATA', getDataAsync),
    takeLatest('GET_MENUS', getMenusAsync),
  ]);
}
