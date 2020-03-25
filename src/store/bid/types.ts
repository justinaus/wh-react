import IPostModel from '../../interfaces/IPostModel';

export const GET_BIDS = 'GET_BIDS';
export const SET_BIDS = 'SET_BIDS';

export interface BidsState {
  datas: IPostModel[];
}

export interface GetBidsAction {
  type: typeof GET_BIDS;
}

export interface SetBidsAction {
  type: typeof SET_BIDS;
  payload: BidsState;
}

export type BidsActionTypes = GetBidsAction | SetBidsAction;
