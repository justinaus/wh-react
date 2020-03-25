import { BidsActionTypes, BidsState, SET_BIDS } from './types';

const initialState: BidsState = {
  datas: [],
};

export function BidsReducer(
  state = initialState,
  action: BidsActionTypes
): BidsState {
  switch (action.type) {
    case SET_BIDS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
