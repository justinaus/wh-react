import { MenuId } from '../enums/MenuId';
import { RouterPath } from '../enums/RouterPath';

export default interface IMenuItemData {
  id: MenuId;
  text: string;
  link: RouterPath;
  arrSub?: Array<IMenuItemData>;
}
