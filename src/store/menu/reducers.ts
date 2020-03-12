import { MenuState, MenuActionTypes, CHANGE_MENU } from './types';
import { MenuId } from '../../enums/MenuId';

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
