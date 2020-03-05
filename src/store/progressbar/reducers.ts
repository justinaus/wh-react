import { SHOW_PROGRESS, HIDE_PROGRESS } from './actions';
import { ProgressbarState } from './types';

interface IProgressAction {
  type: string;
}

const initialState: ProgressbarState = {
  isShow: false,
};

export function progressbarReducer(
  state = initialState,
  action: IProgressAction
): ProgressbarState {
  switch (action.type) {
    case SHOW_PROGRESS: {
      return {
        ...state,
        isShow: true,
      };
    }
    case HIDE_PROGRESS: {
      return {
        ...state,
        isShow: false,
      };
    }
    default:
      return state;
  }
}
