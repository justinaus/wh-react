import { CHANGE_MENU, MenuState, MenuActionTypes } from './types';
import { MenuId } from '../../enums/MenuId';

const initialState: MenuState = {
  selectedMenuId0: MenuId.Management,
  selectedMenuId1: MenuId.ManagementUser,
};

export function menuReducer(
  state = initialState,
  action: MenuActionTypes
): MenuState {
  switch (action.type) {
    case CHANGE_MENU: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
