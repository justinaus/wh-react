import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { menuReducer } from './menu/reducers';
import { progressbarReducer } from './progressbar/reducers';

const rootReducer = combineReducers({
  menu: menuReducer,
  progressbar: progressbarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  // const middlewares = [thunkMiddleware];
  // const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools()
    // composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
