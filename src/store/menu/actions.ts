import { MenuState } from './types';

export const CHANGE_MENU = 'CHANGE_MENU';

export function changeMenuAction(payload: MenuState) {
  return {
    type: CHANGE_MENU,
    payload: payload,
  };
}
