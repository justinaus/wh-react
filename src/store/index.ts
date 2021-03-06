import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { menuReducer } from './menu/reducers';
import { progressbarReducer } from './progressbar/reducers';
import { BidsReducer } from './bid/reducers';
import { ProductsReducer } from './product/reducers';

import rootSaga from '../sagas';

const rootReducer = combineReducers({
  menu: menuReducer,
  progressbar: progressbarReducer,
  products: ProductsReducer,
  bids: BidsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
const middleWareEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

sagaMiddleware.run(rootSaga);

export default store;
