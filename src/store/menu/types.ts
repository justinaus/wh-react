import { MenuId } from '../../enums/MenuId';

export interface MenuState {
  menuId: MenuId | null;
  subMenuId: MenuId | null;
}

export const CHANGE_MENU = 'CHANGE_MENU';

interface ChangeMenuAction {
  type: typeof CHANGE_MENU;
  payload: MenuState;
}

export type MenuActionTypes = ChangeMenuAction;
