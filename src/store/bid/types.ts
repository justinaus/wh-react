import IPostModel from '../../interfaces/IPostModel';

export const SET_BIDS = 'SET_BIDS';

export interface BidsState {
  datas: IPostModel[];
}

interface SetBidsAction {
  type: typeof SET_BIDS;
  payload: BidsState;
}

export type BidsActionTypes = SetBidsAction;
