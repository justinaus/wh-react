import { MenuId } from '../enums/MenuId';

export interface IHasMenu {
  menuId: MenuId | null;
  subMenuId?: MenuId | null;
}
