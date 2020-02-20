import { CHANGE_MENU, MenuState } from './types';

export function changeMenuAction(payload: MenuState) {
  return {
    type: CHANGE_MENU,
    payload: payload,
  };
}
