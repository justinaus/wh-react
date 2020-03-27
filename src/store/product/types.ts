import ITodoModel from '../../interfaces/ITodoModel';
import { IAxiosCancelable } from '../../interfaces/IAxiosCancelable';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export interface ProductsState {
  datas: ITodoModel[];
}

export interface GetProductsAction extends IAxiosCancelable {
  type: typeof GET_PRODUCTS;
}

export interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  payload: ProductsState;
}

export type ProductsActionTypes = GetProductsAction | SetProductsAction;
