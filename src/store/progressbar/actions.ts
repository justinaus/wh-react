import { SHOW_PROGRESS, HIDE_PROGRESS, ProgressbarActionTypes } from './types';

export function showProgressAction(): ProgressbarActionTypes {
  return {
    type: SHOW_PROGRESS,
  };
}

export function hideProgressAction(): ProgressbarActionTypes {
  return {
    type: HIDE_PROGRESS,
  };
}
