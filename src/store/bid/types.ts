import IPostModel from '../../interfaces/IPostModel';
import { IAxiosCancelable } from '../../interfaces/IAxiosCancelable';

export const GET_BIDS = 'GET_BIDS';
export const SET_BIDS = 'SET_BIDS';

export interface BidsState {
  datas: IPostModel[];
}

export interface GetBidsAction extends IAxiosCancelable {
  type: typeof GET_BIDS;
}

export interface SetBidsAction {
  type: typeof SET_BIDS;
  payload: BidsState;
}

export type BidsActionTypes = GetBidsAction | SetBidsAction;
