import * as actions from '../redux/actions/types';
import { takeLatest, takeEvery, all, put, delay } from 'redux-saga/effects';

function* getDataAsync() {
  yield put({
    type: 'GET_DATA_ASYNC',
    data: [{ name: 'ASt', age: 23 }],
  });
}

export function* rootSaga() {
  yield all([takeLatest(actions.GET_DATA, getDataAsync)]);
}
