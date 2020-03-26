import { GET_PRODUCTS, GetProductsAction } from './types';

export const createGetProductsAction = (): GetProductsAction => ({
  type: GET_PRODUCTS,
});
