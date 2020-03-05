import { MenuState } from './types';
import { MenuId } from '../../enums/MenuId';
import { CHANGE_MENU } from './actions';

interface ChangeMenuAction {
  type: typeof CHANGE_MENU;
  payload: MenuState;
}

type MenuActionTypes = ChangeMenuAction;

const initialState: MenuState = {
  menuId: MenuId.Management,
  subMenuId: MenuId.ManagementEtc,
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
