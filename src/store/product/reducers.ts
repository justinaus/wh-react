import { ProductsActionTypes, ProductsState, SET_PRODUCTS } from './types';

const initialState: ProductsState = {
  datas: [],
};

export function ProductsReducer(
  state = initialState,
  action: ProductsActionTypes
): ProductsState {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
