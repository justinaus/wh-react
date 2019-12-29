import { MenuId } from '../../enums/MenuId';

export interface MenuState {
  selectedMenuId0: MenuId | null;
  selectedMenuId1: MenuId | null;
}

export const CHANGE_MENU = 'CHANGE_MENU';

interface ChangeMenuAction {
  type: typeof CHANGE_MENU;
  payload: MenuState;
}

export type MenuActionTypes = ChangeMenuAction;
