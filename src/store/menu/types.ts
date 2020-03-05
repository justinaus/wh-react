import { MenuId } from '../../enums/MenuId';

export interface MenuState {
  menuId: MenuId | null;
  subMenuId: MenuId | null;
}
