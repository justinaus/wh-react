import { GET_PRODUCTS, GetProductsAction } from './types';
import { CancelTokenSource } from 'axios';

export const createGetProductsAction = (
  source: CancelTokenSource
): GetProductsAction => ({
  type: GET_PRODUCTS,
  cancelTokenSource: source,
});
