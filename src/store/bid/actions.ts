import { BidsState, SET_BIDS } from './types';
import http from '../../services/http';
import { ApiPath } from '../../enums/ApiPath';
import IPostModel from '../../interfaces/IPostModel';
import { AxiosError } from 'axios';

const getData = async () => {
  const result = await http
    .get(ApiPath.Bids)
    .then(response => {
      const ret: IPostModel[] = response.data;
      return ret;
    })
    .catch((error: AxiosError) => {
      return error;
    });

  return result;
};

export const createSetBidsAction = (payload: BidsState) => ({
  type: SET_BIDS,
  payload: payload,
});

export function createGetBidsActionAsync() {
  async function funcAction(dispatch) {
    const response = await getData();

    // interface type check issue.
    // https://github.com/Microsoft/TypeScript/issues/19120
    if ((response as AxiosError).isAxiosError) {
      return;
    }

    dispatch(createSetBidsAction({ datas: response as IPostModel[] }));
  }

  // 비동기 함수를 넘긴다.
  return funcAction;
}

// export const createGetBidsActionAsync = () => async dispatch => {
//   const response = await getData();

//   if (!response) {
//     return;
//   }

//   dispatch(createSetBidsAction({ datas: response }));
// };
