/* eslint-disable no-constant-condition */

import {
  take,
  put,
  call,
  fork,
  select,
  takeEvery,
  all,
} from 'redux-saga/effects';
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

const getData = async (path: string) => {
  const result = await http
    .get(path)
    .then(response => {
      // const ret: IPostModel[] = response.data;
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

function* mySaga() {
  yield takeEvery(GET_BIDS, getBids);
}

export default mySaga;
