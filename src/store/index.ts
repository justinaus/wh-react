import { createStore, combineReducers } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { menuReducer } from './menu/reducers';
import { progressbarReducer } from './progressbar/reducers';

const rootReducer = combineReducers({
  menu: menuReducer,
  progressbar: progressbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// export default function configureStore() {
//   // const middlewares = [thunkMiddleware];
//   // const middleWareEnhancer = applyMiddleware(...middlewares);

//   const store = createStore(
//     rootReducer,
//     composeWithDevTools()
//     // composeWithDevTools(middleWareEnhancer)
//   );

//   return store;
// }
