import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { menuReducer } from './menu/reducers';
import { progressbarReducer } from './progressbar/reducers';
import { BidsReducer } from './bid/reducers';

const rootReducer = combineReducers({
  menu: menuReducer,
  progressbar: progressbarReducer,
  bids: BidsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const middlewares = [thunk];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

export default store;
