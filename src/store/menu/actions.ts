import { MenuState, CHANGE_MENU, MenuActionTypes } from './types';

export function changeMenuAction(payload: MenuState): MenuActionTypes {
  return {
    type: CHANGE_MENU,
    payload: payload,
  };
}
