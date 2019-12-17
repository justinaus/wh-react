import { CHANGE_MENU, MenuState } from './types';

export function changeMenu(payload: MenuState) {
  return {
    type: CHANGE_MENU,
    payload: payload,
  };
}
