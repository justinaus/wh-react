import { MenuId } from '../../enums/MenuId';

export const CHANGE_MENU = 'CHANGE_MENU';

export interface MenuState {
  menuId: MenuId | null;
  subMenuId: MenuId | null;
}

interface ChangeMenuAction {
  type: typeof CHANGE_MENU;
  payload: MenuState;
}

export type MenuActionTypes = ChangeMenuAction;
