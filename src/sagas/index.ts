/* eslint-disable no-constant-condition */

import { put, fork, takeEvery, all } from 'redux-saga/effects';
import {
  GET_BIDS,
  SetBidsAction,
  SET_BIDS,
  BidsState,
  GetBidsAction,
} from '../store/bid/types';
import http from '../services/http';
import { ApiPath } from '../enums/ApiPath';
import { AxiosError } from 'axios';
import IPostModel from '../interfaces/IPostModel';
import {
  GET_PRODUCTS,
  GetProductsAction,
  ProductsState,
  SetProductsAction,
  SET_PRODUCTS,
} from '../store/product/types';
import ITodoModel from '../interfaces/ITodoModel';

const getData = async (path: string) => {
  const result = await http
    .get(path)
    .then(response => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error;
    });

  return result;
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getBids(action: GetBidsAction) {
  try {
    const result = yield getData(ApiPath.Bids);

    const state: BidsState = {
      datas: result as IPostModel[],
    };

    const newAction: SetBidsAction = {
      type: SET_BIDS,
      payload: state,
    };

    yield put(newAction);
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* getProducts(action: GetProductsAction) {
  try {
    const result = yield getData(ApiPath.Products);

    const state: ProductsState = {
      datas: result as ITodoModel[],
    };

    const newAction: SetProductsAction = {
      type: SET_PRODUCTS,
      payload: state,
    };

    yield put(newAction);
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export function* watchGetProducts() {
  yield takeEvery(GET_PRODUCTS, getProducts);
}

export function* watchGetBids() {
  yield takeEvery(GET_BIDS, getBids);
  /*
      ***THIS IS A BLOCKING CALL***
      It means that watchCheckout will ignore any CHECKOUT_REQUEST event until
      the current checkout completes, either by success or by Error.
      i.e. concurrent CHECKOUT_REQUEST are not allowed
      TODO: This needs to be enforced by the UI (disable checkout button)
    */
  //  yield call(checkout)
}

export default function* root() {
  yield all([fork(watchGetProducts), fork(watchGetBids)]);
}
