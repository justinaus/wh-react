import { GET_BIDS, GetBidsAction } from './types';
import { CancelTokenSource } from 'axios';

export const createGetBidsAction = (
  source: CancelTokenSource
): GetBidsAction => ({
  type: GET_BIDS,
  cancelTokenSource: source,
});
