import { GET_BIDS, GetBidsAction } from './types';

export const createGetBidsAction = (): GetBidsAction => ({
  type: GET_BIDS,
});
