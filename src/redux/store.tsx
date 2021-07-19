import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { rootSaga } from '../sagas/saga';
const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

// sagaMiddleware.run(rootSaga);

export default store;
