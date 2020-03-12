export const SHOW_PROGRESS = 'SHOW_PROGRESS';
export const HIDE_PROGRESS = 'HIDE_PROGRESS';

export interface ProgressbarState {
  isShow: boolean;
}

interface ShowProgressAction {
  type: typeof SHOW_PROGRESS;
}

interface HideProgressAction {
  type: typeof HIDE_PROGRESS;
}

export type ProgressbarActionTypes = ShowProgressAction | HideProgressAction;
