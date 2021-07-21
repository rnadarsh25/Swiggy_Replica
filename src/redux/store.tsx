import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/saga';
// const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
