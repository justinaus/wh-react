import {
  ProgressbarState,
  SHOW_PROGRESS,
  HIDE_PROGRESS,
  ProgressbarActionTypes,
} from './types';

const initialState: ProgressbarState = {
  isShow: false,
};

export function progressbarReducer(
  state = initialState,
  action: ProgressbarActionTypes
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
